
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Anurag - Product Builder and Creative Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px",
          backgroundColor: "#0E0D0C",
          color: "#EDE8DF",
          fontFamily: "Arial",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 18,
            letterSpacing: "3px",
            color: "#8C877D",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#FF4D1C",
            }}
          />
          ANURAG / PORTFOLIO
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-3px",
            }}
          >
            BUILDING DIGITAL
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-3px",
            }}
          >
            PRODUCTS
            <span style={{ color: "#FF4D1C" }}>.</span>
          </div>

          <div
            style={{
              marginTop: 24,
              fontSize: 25,
              color: "#8C877D",
            }}
          >
            Product Builder / Creative Developer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 15,
            letterSpacing: "2px",
            color: "#8C877D",
          }}
        >
          <span>PRODUCT / ENGINEERING / CREATIVE</span>
          <span>BENGALURU, INDIA</span>
        </div>

        <div
          style={{
            position: "absolute",
            right: 64,
            top: 120,
            width: 120,
            height: 120,
            border: "1px solid #2B2926",
            transform: "rotate(25deg)",
          }}
        />
      </div>
    ),
    size
  );
}
