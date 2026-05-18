"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import { profile } from "@/lib/profile";

const techBadges = [
  { label: "React", color: "#61DAFB", bg: "rgba(97, 218, 251, 0.1)" },
  { label: "TypeScript", color: "#3178C6", bg: "rgba(49, 120, 198, 0.1)" },
  { label: "Tailwind", color: "#38BDF8", bg: "rgba(56, 189, 248, 0.1)" },
  { label: "Redux", color: "#764ABC", bg: "rgba(118, 74, 188, 0.1)" },
  { label: "Node.js", color: "#68A063", bg: "rgba(104, 160, 99, 0.1)" },
  { label: "Next.js", color: "#fff", bg: "rgba(255, 255, 255, 0.07)" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blob 1 — purple */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[80px] animate-blob-1"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
        />
        {/* Blob 2 — cyan */}
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 blur-[80px] animate-blob-2"
          style={{ background: "radial-gradient(circle, #22d3ee, transparent)" }}
        />
        {/* Blob 3 — pink */}
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full opacity-10 blur-[80px] animate-blob-3"
          style={{ background: "radial-gradient(circle, #f472b6, transparent)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm"
            style={{ animation: "fadeUp 0.6s ease-out forwards", opacity: 0 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-white/70">
              {profile.yearsExperience}+ Years Experience
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/70">React & Next.js</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/70">TypeScript</span>
          </div>

          {/* Main heading */}
          <div
            style={{
              animation: "fadeUp 0.6s ease-out 0.1s forwards",
              opacity: 0,
            }}
          >
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              <span className="block text-white">Hi, I'm</span>
              <span className="block gradient-text">Gopal</span>
            </h1>
          </div>

          {/* Role pill */}
          <div
            className="flex items-center gap-3"
            style={{
              animation: "fadeUp 0.6s ease-out 0.2s forwards",
              opacity: 0,
            }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
            <span
              className="text-lg sm:text-xl text-white/60 font-medium"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              {profile.role}
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
          </div>

          {/* Subheading */}
          <p
            className="max-w-xl text-base sm:text-lg text-white/50 leading-relaxed"
            style={{
              animation: "fadeUp 0.6s ease-out 0.3s forwards",
              opacity: 0,
            }}
          >
            I build{" "}
            <span className="text-white/80 font-medium">
              responsive, scalable, and production-ready
            </span>{" "}
            web applications with React, Next.js, and modern frontend tooling.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            style={{
              animation: "fadeUp 0.6s ease-out 0.4s forwards",
              opacity: 0,
            }}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all duration-300 shadow-glow hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass glow-border text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
            >
              Contact Me
            </Link>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-4"
            style={{
              animation: "fadeUp 0.6s ease-out 0.5s forwards",
              opacity: 0,
            }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg glass glass-hover text-white/50 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg glass glass-hover text-white/50 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <span className="text-white/20 text-sm">·</span>
            <span className="text-white/40 text-sm">{profile.locationShort}</span>
          </div>

          {/* Tech badges floating row */}
          <div
            className="flex flex-wrap justify-center gap-2 mt-4"
            style={{
              animation: "fadeUp 0.6s ease-out 0.6s forwards",
              opacity: 0,
            }}
          >
            {techBadges.map((badge, i) => (
              <span
                key={badge.label}
                className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: badge.bg,
                  color: badge.color,
                  borderColor: `${badge.color}25`,
                  animation: `floatY ${4 + i * 0.5}s ease-in-out infinite ${i * 0.3}s`,
                }}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 bottom-[0px] -translate-x-1/2 bottom-0 flex flex-col items-center gap-2 text-white/30"
        style={{  }}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-jetbrains)",animation: "fadeIn 1s ease-out 1s forwards", opacity: 0 }}
        >
          scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
