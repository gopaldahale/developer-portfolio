import Link from "next/link";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { profile } from "@/lib/profile";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    href: profile.github,
    icon: Github,
    label: "GitHub",
  },
  {
    href: profile.linkedin,
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: `mailto:${profile.email}`,
    icon: Mail,
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-bg-2 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center">
                <Code2 className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
              <span
                className="font-bold text-base gradient-text"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                {profile.name}
              </span>
            </Link>
            <p className="text-xs text-white/30 max-w-xs text-center md:text-left">
              {profile.role} · Building fast, scalable web interfaces.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Gopal Dahale. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-white/40">Next.js + Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
