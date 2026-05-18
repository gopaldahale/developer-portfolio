"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
  ImageIcon,
  Monitor,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";

interface ProjectDemoModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectDemoModal({
  project,
  open,
  onClose,
}: ProjectDemoModalProps) {
  const [mounted, setMounted] = useState(false);
  const slides = project?.demoSlides ?? [];
  const hasSlides = slides.length > 0;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (!hasSlides) return;
      setActiveIndex((index + slides.length) % slides.length);
    },
    [hasSlides, slides.length]
  );

  useEffect(() => {
    if (open) setActiveIndex(0);
  }, [open, project?.slug]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goTo(activeIndex - 1);
      if (e.key === "ArrowRight") goTo(activeIndex + 1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, goTo, activeIndex]);

  if (!mounted || !open || !project) return null;

  const currentSlide = hasSlides ? slides[activeIndex] : null;
  const hasLiveUrl = project.liveUrl !== "#";

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close demo"
      />

      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col glass rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden animate-[fadeIn_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-white/8 shrink-0">
          <div className="min-w-0">
            <h2
              id="demo-modal-title"
              className="text-lg font-bold text-white truncate"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              {project.title}
            </h2>
            <p className="text-xs text-accent-cyan mt-0.5 truncate">
              {project.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative flex-1 min-h-0 bg-bg-2/80">
          <div className="relative aspect-video w-full max-h-[min(56vh,520px)] mx-auto">
            {hasSlides && currentSlide?.type === "iframe" ? (
              <iframe
                src={currentSlide.src}
                title={currentSlide.alt ?? `${project.title} demo`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : hasSlides && currentSlide?.type === "image" ? (
              <Image
                src={currentSlide.src}
                alt={currentSlide.alt ?? `${project.title} screenshot`}
                fill
                className="object-contain"
                sizes="(max-width: 896px) 100vw, 896px"
                unoptimized
              />
            ) : (
              <div
                className={cn(
                  "absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br",
                  project.gradient
                )}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <span className="text-6xl opacity-70 relative z-10">
                  {project.icon}
                </span>
                <p className="text-sm text-white/50 text-center max-w-xs px-4 relative z-10">
                  Add screenshots to{" "}
                  <code className="text-accent-cyan text-xs">demoSlides</code> in{" "}
                  <code className="text-accent-cyan text-xs">lib/data.ts</code>, or
                  embed a live site with an iframe slide.
                </p>
                <div className="flex items-center gap-4 text-xs text-white/30 relative z-10">
                  <span className="flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5" />
                    type: &quot;image&quot;
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5" />
                    type: &quot;iframe&quot;
                  </span>
                </div>
              </div>
            )}
          </div>

          {hasSlides && slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        <div className="flex-shrink-0 px-5 py-4 border-t border-white/8 space-y-3">
          {hasSlides && slides.length > 1 && (
            <div className="flex justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === activeIndex
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}

          {currentSlide?.caption && (
            <p className="text-center text-xs text-white/40">
              {currentSlide.caption}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-white/35">
              {hasSlides
                ? `Slide ${activeIndex + 1} of ${slides.length}`
                : "Preview placeholder — add media when ready"}
            </p>
            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-light hover:text-white transition-colors"
              >
                Open live site
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
