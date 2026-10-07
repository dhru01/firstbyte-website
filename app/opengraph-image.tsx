import { ImageResponse } from "next/og";

export const alt = "Firstbyte — AI Automation & Custom Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#03050A",
          color: "#F4F7FB",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, letterSpacing: 8 }}>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 14, height: 14, background: "#2F7BFF" }} />
            <div style={{ width: 14, height: 14, background: "rgba(244,247,251,0.35)" }} />
            <div style={{ width: 14, height: 14, background: "rgba(244,247,251,0.8)" }} />
            <div style={{ width: 14, height: 14, background: "#1769FF" }} />
          </div>
          FIRSTBYTE
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          We build systems that do the work for you.
        </div>
        <div style={{ display: "flex", color: "#96A8BE", fontSize: 26 }}>
          AI automation and custom software
        </div>
      </div>
    ),
    { ...size },
  );
}
