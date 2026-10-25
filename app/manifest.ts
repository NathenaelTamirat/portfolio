import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nathenael Tamirat — Software Engineer & Full-Stack Developer",
    short_name: "Nathenael Tamirat",
    description:
      "Portfolio of Nathenael Tamirat, Software Engineer specializing in full-stack web applications, clinical management systems, and high-performance digital products.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#10b981",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
