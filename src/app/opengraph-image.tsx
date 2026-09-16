import { ImageResponse } from "next/og";

export const alt = "Bourn Hall Fertility Clinic UAE";
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
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #fff5f8 0%, #f8c9d8 45%, #7D1551 100%)",
          color: "#2a1220",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 600, color: "#9d164a" }}>Bourn Hall</div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 16, maxWidth: 900, lineHeight: 1.1 }}>
          Your Fertility Journey Starts Here
        </div>
        <div style={{ fontSize: 24, marginTop: 20, color: "#534049" }}>
          IVF, ICSI and fertility care in Dubai, Abu Dhabi and Al Ain
        </div>
      </div>
    ),
    size,
  );
}
