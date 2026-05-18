"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
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

  // Duplicate slides so loop mode has enough items when 3 are visible on desktop
  const sliderProjects = useMemo(
    () =>
      featured.length < 6
        ? [...featured, ...featured].map((project, i) => ({
            project,
            key: `${project.slug}-${i}`,
          }))
        : featured.map((project) => ({ project, key: project.slug })),
    [featured]
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-5 blur-[120px] bg-accent-cyan pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
              Dashboards, client sites, and full-stack apps — click Live Demo to
              preview each project.
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

        <div className="reveal relative px-11 sm:px-14">
          <button
            ref={prevRef}
            type="button"
            className="featured-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full glass border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors pointer-events-auto"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            type="button"
            className="featured-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full glass border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors pointer-events-auto"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            loop
            slidesPerGroup={1}
            loopPreventsSliding={false}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, slidesPerGroup: 1 },
              1024: { slidesPerView: 3, slidesPerGroup: 1 },
            }}
            navigation={{
              prevEl: ".featured-swiper-prev",
              nextEl: ".featured-swiper-next",
            }}
            pagination={{ clickable: true }}
            watchOverflow={false}
            className="featured-projects-swiper !pb-14"
            onBeforeInit={(swiper) => {
              const nav = swiper.params.navigation;
              if (nav && typeof nav !== "boolean") {
                nav.prevEl = prevRef.current;
                nav.nextEl = nextRef.current;
              }
            }}
            onSwiper={(swiper) => {
              const nav = swiper.params.navigation;
              if (nav && typeof nav !== "boolean") {
                nav.prevEl = prevRef.current;
                nav.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
          >
            {sliderProjects.map(({ project, key }) => (
              <SwiperSlide key={key} className="!h-auto">
                <ProjectCard project={project} featured openDemoInModal />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

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
