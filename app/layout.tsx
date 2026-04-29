import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Gopal Dahale — Frontend Developer",
    template: "%s | Gopal Dahale",
  },
  description:
    "Frontend Developer with 3+ years of experience building responsive, scalable web applications using React.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Web Developer",
    "Pune",
  ],
  authors: [{ name: "Gopal Dahale" }],
  creator: "Gopal Dahale",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gopaldahale.dev",
    title: "Gopal Dahale — Frontend Developer",
    description:
      "Frontend Developer with 3+ years of experience building fast, scalable, and visually polished web interfaces.",
    siteName: "Gopal Dahale Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gopal Dahale — Frontend Developer",
    description:
      "Frontend Developer with 3+ years of experience building fast, scalable web interfaces.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-bg text-white antialiased"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
