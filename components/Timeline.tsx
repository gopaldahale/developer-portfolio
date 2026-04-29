"use client";

import { useEffect, useRef } from "react";
import { experience, education, certifications } from "@/lib/data";
import { Briefcase, GraduationCap, Award, Check } from "lucide-react";

export default function Timeline() {
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
      id="experience"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">Journey</span>
          <h2
            className="section-title text-4xl sm:text-5xl text-white mt-3"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            Experience &{" "}
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent transform -translate-x-1/2" />

          <div className="space-y-12">
            {/* Experience items */}
            {experience.map((exp, i) => (
              <div
                key={i}
                className="relative flex gap-8 sm:grid sm:grid-cols-2 reveal"
              >
                {/* Left — duration (desktop only) */}
                <div className="hidden sm:flex sm:justify-end sm:pr-12 pt-1">
                  <div className="text-right">
                    <span
                      className="text-xs text-accent-cyan font-medium"
                      style={{ fontFamily: "var(--font-jetbrains)" }}
                    >
                      {exp.duration}
                    </span>
                    <div className="text-xs text-white/30 mt-0.5">{exp.type}</div>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-6 sm:left-1/2 top-2 transform -translate-x-1/2 z-10">
                  <div className="w-5 h-5 rounded-full bg-bg border-2 border-primary flex items-center justify-center shadow-glow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Right — content */}
                <div className="pl-16 sm:pl-12 sm:col-start-2">
                  <div className="glass glow-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                    {/* Mobile duration */}
                    <span
                      className="sm:hidden block text-xs text-accent-cyan font-medium mb-2"
                      style={{ fontFamily: "var(--font-jetbrains)" }}
                    >
                      {exp.duration}
                    </span>
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                        <Briefcase className="w-4 h-4 text-primary-light" />
                      </div>
                      <div>
                        <h3
                          className="font-bold text-white"
                          style={{ fontFamily: "var(--font-bricolage)" }}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-sm text-accent-cyan font-medium">
                          {exp.company}
                        </p>
                        <p className="text-xs text-white/30 mt-0.5">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.contributions.map((c, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-white/55">
                          <Check className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0 mt-0.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* Education */}
            {education.map((edu, i) => (
              <div
                key={i}
                className="relative flex gap-8 sm:grid sm:grid-cols-2 reveal"
              >
                <div className="hidden sm:flex sm:justify-end sm:pr-12 pt-1">
                  <div className="text-right">
                    <span
                      className="text-xs text-accent-cyan font-medium"
                      style={{ fontFamily: "var(--font-jetbrains)" }}
                    >
                      {edu.duration}
                    </span>
                    <div className="text-xs text-white/30 mt-0.5">
                      CGPA: {edu.cgpa}
                    </div>
                  </div>
                </div>

                <div className="absolute left-6 sm:left-1/2 top-2 transform -translate-x-1/2 z-10">
                  <div className="w-5 h-5 rounded-full bg-bg border-2 border-accent-cyan/60 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  </div>
                </div>

                <div className="pl-16 sm:pl-12 sm:col-start-2">
                  <div className="glass rounded-2xl p-6 border border-white/8">
                    <span
                      className="sm:hidden block text-xs text-accent-cyan font-medium mb-2"
                      style={{ fontFamily: "var(--font-jetbrains)" }}
                    >
                      {edu.duration}
                    </span>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                        <GraduationCap className="w-4 h-4 text-accent-cyan" />
                      </div>
                      <div>
                        <h3
                          className="font-bold text-white"
                          style={{ fontFamily: "var(--font-bricolage)" }}
                        >
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-white/60 mt-0.5">{edu.field}</p>
                        <p className="text-xs text-white/40 mt-1">
                          {edu.institution}, {edu.location}
                        </p>
                        <p className="text-xs text-accent-cyan mt-1">
                          CGPA: {edu.cgpa}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 reveal">
          <h3
            className="text-xl font-bold text-white mb-6 text-center"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            Certifications & Awards
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="glass rounded-xl p-4 flex items-center gap-4 border border-white/8 hover:border-white/15 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex-shrink-0">
                  <Award className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80">{cert.name}</p>
                  <p className="text-xs text-white/40 mt-0.5">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
