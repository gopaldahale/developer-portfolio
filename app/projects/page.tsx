import type { Metadata } from "next";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of my frontend and full-stack projects built with React, TypeScript, and modern web technologies.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Header */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center mb-16">
        {/* BG blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full opacity-10 blur-[80px] bg-primary pointer-events-none" />

        <span className="section-label">Portfolio</span>
        <h1
          className="section-title text-5xl sm:text-6xl text-white mt-3"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          All <span className="gradient-text">Projects</span>
        </h1>
        <p className="mt-4 text-white/50 max-w-lg mx-auto text-lg">
          From admin dashboards and client sites to full-stack SaaS — a complete
          look at what I&apos;ve built.
        </p>
      </div>

      {/* Filter row (static for now) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <div className="flex flex-wrap gap-2">
          {["All", "Dashboard", "Client Site", "SaaS", "Full Stack"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                cat === "All"
                  ? "bg-primary text-white shadow-glow-sm"
                  : "glass text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} openDemoInModal />
          ))}
        </div>

        {/* Empty state if no projects */}
        {projects.length === 0 && (
          <div className="text-center py-20 text-white/30">
            No projects found.
          </div>
        )}
      </div>
    </div>
  );
}
