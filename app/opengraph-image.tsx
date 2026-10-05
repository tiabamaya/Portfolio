import {
  ImageResponse,
} from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType =
  "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",

          display: "flex",
          flexDirection: "column",

          justifyContent:
            "space-between",

          padding: "70px",

          background: "#111111",

          color: "#f3f2ed",
        }}
      >
        <div
          style={{
            display: "flex",

            justifyContent:
              "space-between",

            fontSize: 22,

            color: "#999999",
          }}
        >
          <span>
            ISAIAH CONCEPCION
          </span>

          <span>
            PORTFOLIO / 2026
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 24,

              marginBottom: 20,

              color: "#999999",
            }}
          >
            SOFTWARE DEVELOPER
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",

              fontSize: 105,

              fontWeight: 700,

              lineHeight: 0.85,

              letterSpacing: "-6px",
            }}
          >
            <span>
              ISAIAH
            </span>

            <span>
              CONCEPCION.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",

            gap: 28,

            fontSize: 20,

            color: "#999999",
          }}
        >
          <span>WEB</span>
          <span>BACKEND</span>
          <span>MOBILE</span>
          <span>AI</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}