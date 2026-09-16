import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishikesh Munnaluri | Software Engineer",
  description:
    "Portfolio of Rishikesh Munnaluri — software engineer focused on full-stack products, backend systems, realtime applications and applied AI.",
  keywords: [
    "Rishikesh Munnaluri",
    "Software Engineer",
    "Full Stack Developer",
    "Applied AI",
    "Backend Engineer",
    "Bengaluru",
  ],
  authors: [{ name: "Rishikesh Munnaluri" }],
  openGraph: {
    title: "Rishikesh Munnaluri | Software Engineer",
    description:
      "Full-stack engineering, backend systems, realtime products and applied AI.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e7ecf2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
