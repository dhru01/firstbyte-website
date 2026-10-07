import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const cells = [
    "#F4F7FB55",
    "#2F7BFF",
    "#F4F7FB55",
    "#F4F7FBD9",
    "#F4F7FB55",
    "#F4F7FB8C",
    "#1769FF",
    "#F4F7FB55",
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#03050A",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", width: 92, gap: 10 }}>
          {cells.map((color, index) => (
            <div key={index} style={{ width: 18, height: 18, background: color }} />
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
