"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

type CellState = "hidden" | "revealed" | "flagged";
type GameStatus = "idle" | "playing" | "won" | "lost";

interface Cell {
  isMine: boolean;
  state: CellState;
  adj: number;
}

const ROWS = 9;
const COLS = 9;
const MINES = 10;

// ── Game logic ───────────────────────────────────────────────────────────────

function emptyBoard(): Cell[][] {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({ isMine: false, state: "hidden" as CellState, adj: 0 }))
  );
}

function placeMines(safeR: number, safeC: number): Cell[][] {
  const b = emptyBoard();
  let placed = 0;
  while (placed < MINES) {
    const r = Math.floor(Math.random() * ROWS);
    const c = Math.floor(Math.random() * COLS);
    if (!b[r][c].isMine) {
      b[r][c].isMine = true;
      placed++;
    }
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (b[r][c].isMine) continue;
      let count = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && b[nr][nc].isMine) count++;
        }
      }
      b[r][c].adj = count;
    }
  }
  return b;
}

function cloneBoard(b: Cell[][]): Cell[][] {
  return b.map(row => row.map(cell => ({ ...cell })));
}

function floodReveal(board: Cell[][], r: number, c: number): Cell[][] {
  const b = cloneBoard(board);
  function reveal(r: number, c: number) {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
    if (b[r][c].state !== "hidden") return;
    b[r][c].state = "revealed";
    if (b[r][c].adj === 0 && !b[r][c].isMine) {
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++) reveal(r + dr, c + dc);
    }
  }
  reveal(r, c);
  return b;
}

function checkWon(board: Cell[][]): boolean {
  return board.every(row => row.every(cell => cell.isMine || cell.state === "revealed"));
}

// ── Number colours (classic XP palette) ─────────────────────────────────────
const NUM_COLORS = ["", "#0000ff", "#007b00", "#ff0000", "#00007b", "#7b0000", "#007b7b", "#000000", "#7b7b7b"];

// ── LCD segment display ──────────────────────────────────────────────────────
function Lcd({ value }: { value: number }) {
  const clamped = Math.max(-99, Math.min(999, value));
  const str = clamped < 0
    ? "-" + String(Math.abs(clamped)).padStart(2, "0")
    : String(clamped).padStart(3, "0");
  return (
    <div style={{ background: "#000", color: "#ff0000", fontFamily: "'Courier New', monospace", fontSize: 20, fontWeight: 700, letterSpacing: 2, padding: "2px 6px", border: "2px inset #808080", minWidth: 52, textAlign: "right", lineHeight: 1.2, userSelect: "none" }}>
      {str}
    </div>
  );
}

// ── Smiley face button ───────────────────────────────────────────────────────
function SmileyBtn({ status, onReset, isPressed }: { status: GameStatus; isPressed: boolean; onReset: () => void }) {
  const face = status === "won" ? "😎" : status === "lost" ? "😵" : isPressed ? "😮" : "🙂";
  return (
    <button
      onClick={onReset}
      style={{
        width: 32, height: 32, fontSize: 18, lineHeight: "28px", textAlign: "center",
        border: "3px outset #fff", background: "#c0c0c0", cursor: "pointer",
        padding: 0, display: "flex", alignItems: "center", justifyContent: "center",
      }}
      onMouseDown={(e) => { (e.currentTarget as HTMLButtonElement).style.borderStyle = "inset"; }}
      onMouseUp={(e) => { (e.currentTarget as HTMLButtonElement).style.borderStyle = "outset"; }}
      title="Nieuw spel"
    >
      {face}
    </button>
  );
}

// ── Single cell ──────────────────────────────────────────────────────────────
function Cell3D({ cell, onClick, onRightClick, lost }: {
  cell: Cell;
  onClick: () => void;
  onRightClick: (e: React.MouseEvent) => void;
  lost: boolean;
}) {
  const revealed = cell.state === "revealed";
  const flagged = cell.state === "flagged";

  let content: React.ReactNode = null;
  let bg = "#c0c0c0";
  let border = "2px outset #fff";

  if (revealed) {
    border = "1px solid #808080";
    bg = "#c0c0c0";
    if (cell.isMine) {
      bg = lost ? "#ff0000" : "#c0c0c0";
      content = "💣";
    } else if (cell.adj > 0) {
      content = <span style={{ color: NUM_COLORS[cell.adj], fontWeight: 700, fontSize: 13 }}>{cell.adj}</span>;
    }
  } else if (flagged) {
    content = "🚩";
  } else if (lost && cell.isMine) {
    content = "💣";
    bg = "#c0c0c0";
  }

  return (
    <td
      onClick={onClick}
      onContextMenu={onRightClick}
      style={{
        width: 22, height: 22, background: bg, border, cursor: revealed ? "default" : "pointer",
        textAlign: "center", verticalAlign: "middle", fontSize: 13, lineHeight: "20px",
        userSelect: "none", padding: 0,
      }}
    >
      {content}
    </td>
  );
}

// ── Main game component ──────────────────────────────────────────────────────

export default function MinesweeperGame() {
  const [board, setBoard] = useState<Cell[][]>(emptyBoard);
  const [status, setStatus] = useState<GameStatus>("idle");
  const [flagCount, setFlagCount] = useState(0);
  const [time, setTime] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => setTime(t => Math.min(t + 1, 999)), 1000);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  useEffect(() => () => stopTimer(), [stopTimer]);

  function reset() {
    stopTimer();
    setBoard(emptyBoard());
    setStatus("idle");
    setFlagCount(0);
    setTime(0);
  }

  function handleClick(r: number, c: number) {
    if (status === "won" || status === "lost") return;
    const cell = board[r][c];
    if (cell.state !== "hidden") return;

    let b = board;

    if (status === "idle") {
      b = placeMines(r, c);
      setStatus("playing");
      startTimer();
    }

    if (b[r][c].isMine) {
      const nb = cloneBoard(b);
      nb[r][c] = { ...nb[r][c], state: "revealed" };
      setBoard(nb);
      setStatus("lost");
      stopTimer();
      return;
    }

    const nb = floodReveal(b, r, c);
    if (checkWon(nb)) {
      setBoard(nb);
      setStatus("won");
      stopTimer();
    } else {
      setBoard(nb);
    }
  }

  function handleRightClick(e: React.MouseEvent, r: number, c: number) {
    e.preventDefault();
    if (status === "won" || status === "lost") return;
    const cell = board[r][c];
    if (cell.state === "revealed") return;
    const nb = cloneBoard(board);
    if (cell.state === "hidden") {
      nb[r][c].state = "flagged";
      setFlagCount(f => f + 1);
    } else {
      nb[r][c].state = "hidden";
      setFlagCount(f => f - 1);
    }
    setBoard(nb);
  }

  const minesLeft = MINES - flagCount;

  return (
    <div
      style={{ background: "#c0c0c0", padding: 8, userSelect: "none", display: "inline-block" }}
      onMouseDown={() => { if (status === "playing") setIsPressed(true); }}
      onMouseUp={() => setIsPressed(false)}
    >
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#c0c0c0", border: "3px inset #808080", padding: "4px 6px", marginBottom: 6 }}>
        <Lcd value={minesLeft} />
        <SmileyBtn status={status} isPressed={isPressed} onReset={reset} />
        <Lcd value={time} />
      </div>

      {/* Grid */}
      <div style={{ border: "3px inset #808080" }}>
        <table style={{ borderCollapse: "collapse" }}>
          <tbody>
            {board.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => (
                  <Cell3D
                    key={c}
                    cell={cell}
                    lost={status === "lost"}
                    onClick={() => handleClick(r, c)}
                    onRightClick={(e) => handleRightClick(e, r, c)}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {status === "won" && (
        <div style={{ textAlign: "center", marginTop: 6, fontSize: 12, color: "#000080", fontFamily: "Tahoma, sans-serif", fontWeight: 700 }}>
          Gewonnen! 🎉
        </div>
      )}
    </div>
  );
}
