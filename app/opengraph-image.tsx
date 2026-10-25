import { ImageResponse } from "next/og";

export const alt = "Nathenael Tamirat — Software Engineer & Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          backgroundImage: "radial-gradient(circle at 25px 25px, #18181b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #18181b 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "70px 80px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          color: "#ffffff",
          border: "1px solid #27272a",
        }}
      >
        {/* Top Bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 20px",
              borderRadius: "9999px",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              fontSize: "18px",
              fontWeight: 600,
              color: "#34d399",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "9999px",
                backgroundColor: "#10b981",
              }}
            />
            Available for work
          </div>
          <div style={{ fontSize: "22px", color: "#a1a1aa", fontWeight: 500 }}>
            nathenaeltamirat.dev
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "66px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            Nathenael Tamirat
          </div>
          <div
            style={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#10b981",
              letterSpacing: "-0.01em",
            }}
          >
            Software Engineer &amp; Full-Stack Developer
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#a1a1aa",
              maxWidth: "960px",
              lineHeight: 1.5,
            }}
          >
            Specializing in high-performance web applications, clinical healthcare platforms, and cloud architecture.
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker", "AWS", "CI/CD"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 18px",
                backgroundColor: "rgba(24, 24, 27, 0.8)",
                border: "1px solid #3f3f46",
                borderRadius: "6px",
                fontSize: "17px",
                fontWeight: 500,
                color: "#e4e4e7",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
