import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: "linear-gradient(145deg, #FF8C3A, #CC4A00)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 22,
            fontWeight: 900,
            fontFamily: "Arial, sans-serif",
            lineHeight: 1,
            marginTop: 1,
            textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
          }}
        >
          W
        </span>
      </div>
    ),
    { ...size }
  );
}
