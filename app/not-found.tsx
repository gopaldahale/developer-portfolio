import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p
          className="text-8xl font-bold gradient-text mb-4"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          404
        </p>
        <h1
          className="text-3xl font-bold text-white mb-3"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          Page not found
        </h1>
        <p className="text-white/50 mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
