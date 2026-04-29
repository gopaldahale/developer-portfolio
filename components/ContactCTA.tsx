import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative glass rounded-3xl overflow-hidden border border-white/8">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-cyan/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />

          {/* Blobs */}
          <div className="absolute top-8 left-8 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-accent-cyan/10 blur-3xl" />

          <div className="relative z-10 text-center px-8 py-16 sm:py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs text-white/60 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              Available for opportunities
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Let's build something{" "}
              <span className="gradient-text">great together</span>
            </h2>

            <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">
              Open to freelance and full-time opportunities. Let's discuss your
              project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all duration-300 shadow-glow hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:gopaldahale77@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass glow-border text-white/70 hover:text-white font-semibold text-sm transition-all duration-300"
              >
                gopaldahale77@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
