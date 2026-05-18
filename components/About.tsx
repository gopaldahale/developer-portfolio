"use client";

import { useEffect, useRef } from "react";
import { User, Zap, Code, Award } from "lucide-react";
import { profile } from "@/lib/profile";

const stats = [
  { label: "Years Experience", value: `${profile.yearsExperience}+`, icon: Award },
  { label: "Projects Delivered", value: "10+", icon: Code },
  { label: "Lighthouse Score", value: "99+", icon: Zap },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-[100px] bg-accent-cyan pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text content */}
          <div className="space-y-8">
            <div className="space-y-4 reveal">
              <span className="section-label">About Me</span>
              <h2
                className="section-title text-4xl sm:text-5xl text-white"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Developer who obsesses over{" "}
                <span className="gradient-text">craft & performance</span>
              </h2>
            </div>

            <div className="space-y-4 text-white/60 leading-relaxed reveal">
              {profile.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 reveal">
              {profile.techHighlights.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 text-sm text-white/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                  {tech}
                </div>
              ))}
            </div>

            {/* Download CV */}
            <div className="reveal">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass glow-border text-sm font-medium text-white/80 hover:text-white transition-all duration-300 hover:border-primary/40"
              >
                <User className="w-4 h-4 text-primary-light" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right — Stats + Visual */}
          <div className="space-y-6 reveal">
            {/* Avatar / code card */}
            <div className="relative">
              <div className="glass glow-border rounded-2xl p-6 space-y-4">
                {/* Fake code snippet */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span
                    className="ml-auto text-xs text-white/30"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    gopal.ts
                  </span>
                </div>
                <pre
                  className="text-sm leading-6 overflow-x-auto"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  <code>
                    <span className="text-violet-400">const</span>
                    <span className="text-white"> developer </span>
                    <span className="text-violet-400">=</span>
                    <span className="text-white"> {"{"}</span>
                    {"\n"}
                    <span className="text-white">{"  "}</span>
                    <span className="text-cyan-400">name</span>
                    <span className="text-white">: </span>
                    <span className="text-emerald-400">'Gopal Dahale'</span>
                    <span className="text-white">,</span>
                    {"\n"}
                    <span className="text-white">{"  "}</span>
                    <span className="text-cyan-400">role</span>
                    <span className="text-white">: </span>
                    <span className="text-emerald-400">'{profile.role}'</span>
                    <span className="text-white">,</span>
                    {"\n"}
                    <span className="text-white">{"  "}</span>
                    <span className="text-cyan-400">experience</span>
                    <span className="text-white">: </span>
                    <span className="text-orange-400">{profile.yearsExperience}</span>
                    <span className="text-white">,</span>
                    {"\n"}
                    <span className="text-white">{"  "}</span>
                    <span className="text-cyan-400">stack</span>
                    <span className="text-white">: [</span>
                    {"\n"}
                    <span className="text-white">{"    "}</span>
                    <span className="text-emerald-400">'React'</span>
                    <span className="text-white">, </span>
                    <span className="text-emerald-400">'TypeScript'</span>
                    <span className="text-white">,</span>
                    {"\n"}
                    <span className="text-white">{"    "}</span>
                    <span className="text-emerald-400">'Next.js'</span>
                    <span className="text-white">, </span>
                    <span className="text-emerald-400">'Redux'</span>
                    {"\n"}
                    <span className="text-white">{"  "}],</span>
                    {"\n"}
                    <span className="text-white">{"  "}</span>
                    <span className="text-cyan-400">available</span>
                    <span className="text-white">: </span>
                    <span className="text-violet-400">true</span>
                    {"\n"}
                    <span className="text-white">{"}"}</span>
                  </code>
                </pre>
              </div>

              {/* Floating accent */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-accent-cyan/20 border border-accent-cyan/40 animate-float-slow" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-primary/20 border border-primary/40 animate-float-medium" />
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="glass rounded-xl p-4 text-center glass-hover"
                >
                  <Icon className="w-4 h-4 text-accent-cyan mx-auto mb-2 opacity-70" />
                  <div
                    className="text-2xl font-bold gradient-text"
                    style={{ fontFamily: "var(--font-bricolage)" }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-white/40 mt-1 leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
