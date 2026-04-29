"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* BG accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-5 blur-[120px] bg-accent-cyan pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="reveal">
            <span className="section-label">Work</span>
            <h2
              className="section-title text-4xl sm:text-5xl text-white mt-3"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="mt-3 text-white/50 max-w-md">
              A selection of projects showcasing my frontend expertise across
              different domains.
            </p>
          </div>
          <Link
            href="/projects"
            className="reveal flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors group flex-shrink-0"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <div
              key={project.slug}
              className="reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ProjectCard project={project} featured />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center reveal">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glow-border text-sm font-medium text-white/70 hover:text-white transition-all duration-300"
          >
            See all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
