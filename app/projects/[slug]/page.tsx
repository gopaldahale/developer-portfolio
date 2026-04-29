import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Check, Tag } from "lucide-react";
import { projects } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const hasLive = project.liveUrl !== "#";
  const hasGithub = project.githubUrl !== "#";

  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Hero image area */}
        <div
          className={`relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} border border-white/8 mb-10`}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl opacity-50">{project.icon}</span>
          </div>
          {/* Category badge */}
          <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass border border-white/15 text-xs font-medium text-white/70">
            {project.category}
          </span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            {project.title}
          </h1>
          <p className="text-accent-cyan font-medium mt-2">{project.subtitle}</p>

          {/* Action links */}
          <div className="flex flex-wrap gap-3 mt-6">
            {hasLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-all duration-200 shadow-glow-sm hover:shadow-glow"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/20 text-white/40 text-sm font-semibold cursor-not-allowed select-none"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </span>
            )}

            {hasGithub ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass glow-border text-white/70 hover:text-white text-sm font-semibold transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass glow-border text-white/30 text-sm font-semibold cursor-not-allowed select-none"
              >
                <Github className="w-4 h-4" />
                View Code
              </span>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <div>
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                About this project
              </h2>
              <p className="text-white/60 leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 p-3.5 rounded-xl glass border border-white/8"
                  >
                    <Check className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/65">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech stack */}
            <div className="glass rounded-2xl border border-white/8 p-6">
              <h3
                className="font-bold text-white mb-4 flex items-center gap-2"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                <Tag className="w-4 h-4 text-accent-cyan" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-primary/10 text-primary-light border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="glass rounded-2xl border border-white/8 p-6 space-y-3">
              <h3
                className="font-bold text-white"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Links
              </h3>
              {hasLive ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-accent-cyan" />
                  Live Demo
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="flex items-center gap-2 text-sm text-white/20 cursor-not-allowed select-none"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-accent-cyan" />
                  Live Demo
                </span>
              )}
              {hasGithub ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub Repository
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="flex items-center gap-2 text-sm text-white/20 cursor-not-allowed select-none"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub Repository
                </span>
              )}
            </div>

            {/* Other projects */}
            <div className="glass rounded-2xl border border-white/8 p-6">
              <h3
                className="font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Other Projects
              </h3>
              <div className="space-y-3">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .slice(0, 2)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group"
                    >
                      <span className="text-lg">{p.icon}</span>
                      <div>
                        <div className="font-medium group-hover:text-primary-light transition-colors">
                          {p.title}
                        </div>
                        <div className="text-xs text-white/30">{p.category}</div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
