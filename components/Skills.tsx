"use client";

import { useState, useEffect, useRef } from "react";
import { skillCategories, techPills } from "@/lib/data";
import { cn } from "@/lib/utils";

const pillColors = [
  "bg-primary/20 text-primary-light border-primary/40 shadow-[0_0_12px_rgba(124,58,237,0.15)]",
  "bg-accent-cyan/15 text-accent-cyan border-accent-cyan/35 shadow-[0_0_12px_rgba(34,211,238,0.12)]",
  "bg-accent-pink/15 text-accent-pink border-accent-pink/35 shadow-[0_0_12px_rgba(244,114,182,0.12)]",
  "bg-accent-green/15 text-accent-green border-accent-green/35 shadow-[0_0_12px_rgba(52,211,153,0.12)]",
  "bg-amber-500/15 text-amber-300 border-amber-500/35 shadow-[0_0_12px_rgba(245,158,11,0.12)]",
  "bg-indigo-500/15 text-indigo-300 border-indigo-500/35 shadow-[0_0_12px_rgba(99,102,241,0.12)]",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
          entries[0].target.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 100);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const currentSkills = skillCategories[activeCategory].skills;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 blur-[100px] bg-primary pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className="section-label">What I work with</span>
          <h2
            className="section-title text-4xl sm:text-5xl text-white mt-3"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            A snapshot of the technologies and tools I use to build modern web
            applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => {
                if (activeCategory === i) return;
                setActiveCategory(i);
                setAnimated(false);
                requestAnimationFrame(() => setAnimated(true));
              }}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === i
                  ? "bg-primary text-white shadow-glow-sm"
                  : "glass text-white/50 hover:text-white hover:bg-white/5"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div key={activeCategory} className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {currentSkills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass rounded-xl p-4 glass-hover animate-[fadeIn_0.35s_ease-out_both]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-white/80">{skill.name}</span>
                <span
                  className="text-xs font-medium text-accent-cyan"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="skill-bar h-full"
                  style={{
                    width: animated ? `${skill.level}%` : "0%",
                    transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${i * 80}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center reveal">
          <p
            className="text-sm text-white/30 mb-6 uppercase tracking-widest"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techPills.map((tech, i) => (
              <span
                key={tech}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-105 cursor-default",
                  pillColors[i % pillColors.length]
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
