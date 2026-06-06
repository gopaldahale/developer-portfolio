"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";
import ProjectDemoModal from "@/components/ProjectDemoModal";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  /** When true, Live Demo opens an in-page modal instead of navigating away */
  openDemoInModal?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
  openDemoInModal = false,
}: ProjectCardProps) {
  const [demoOpen, setDemoOpen] = useState(false);

  const handleLiveDemo = (e: React.MouseEvent) => {
    if (openDemoInModal) {
      e.preventDefault();
      setDemoOpen(true);
      return;
    }
    if (project.liveUrl === "#") e.preventDefault();
  };

  const liveDemoClassName =
    "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary-light text-xs font-medium transition-all duration-200 border border-primary/20";

  return (
    <>
      <div
        className={cn(
          "project-card group relative glass rounded-2xl overflow-hidden border border-white/8",
          "hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]",
          featured ? "flex flex-col" : ""
        )}
      >
        {/* <div
          className={cn("h-1 w-full bg-gradient-to-r", project.gradient.replace("/20", ""))}
        /> */}

        <div
          className={cn(
            "hola relative w-full overflow-hidden bg-gradient-to-br from-primary to-accent-cyan",
            featured ? "h-44" : "h-36",
            
          )}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {project.icon.startsWith("/") || project.icon.includes(".") ? (
              <img
                src={project.icon}
                alt={project.title}
                className="w-100 h-auto group-hover:scale-110 transition-transform duration-500 object-contain"
              />
            ) : (
              <span className="text-5xl group-hover:scale-110 transition-transform duration-500">
                {project.icon}
              </span>
            )}
          </div>
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur text-xs font-medium text-white/70 border border-white/10">
            {project.category}
          </span>
        </div>

        <div className="p-6 flex flex-col gap-4 flex-1">
          <div>
            <h3
              className="font-bold text-lg text-white group-hover:text-primary-light transition-colors"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              {project.title}
            </h3>
            <p className="text-xs text-accent-cyan mt-0.5 font-medium">{project.subtitle}</p>
          </div>

          <p className="text-sm text-white/50 leading-relaxed line-clamp-2 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-md bg-white/5 text-white/50 text-xs border border-white/8"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-0.5 rounded-md bg-white/5 text-white/30 text-xs border border-white/8">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-white/5">
            {openDemoInModal ? (
              <button
                type="button"
                className={liveDemoClassName}
                onClick={() => setDemoOpen(true)}
              >
                <ExternalLink className="w-3 h-3" />
                Live Demo
              </button>
            ) : (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={liveDemoClassName}
                onClick={handleLiveDemo}
              >
                <ExternalLink className="w-3 h-3" />
                Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg glass hover:bg-white/8 text-white/60 hover:text-white text-xs font-medium transition-all duration-200"
              onClick={(e) => project.githubUrl === "#" && e.preventDefault()}
            >
              <Github className="w-3 h-3" />
              GitHub
            </a>
            <Link
              href={`/projects/${project.slug}`}
              className="p-2 rounded-lg glass hover:bg-white/8 text-white/40 hover:text-white transition-all duration-200"
              aria-label="View details"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {openDemoInModal && (
        <ProjectDemoModal
          project={project}
          open={demoOpen}
          onClose={() => setDemoOpen(false)}
        />
      )}
    </>
  );
}
