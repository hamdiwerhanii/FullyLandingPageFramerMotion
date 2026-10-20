import { ImageResponse } from "next/og";
import { SITE } from "@/shared/constants/site";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#212121",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 700, color: "#9ca3af" }}>{SITE.name}</div>
        <div style={{ marginTop: 24, fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
          Your Perfect Learning App
        </div>
        <div style={{ marginTop: 32, fontSize: 36, color: "#d1d5db", maxWidth: 900 }}>
          {SITE.tagline}
        </div>
      </div>
    ),
    size,
  );
}
