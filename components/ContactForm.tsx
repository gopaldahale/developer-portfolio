"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (status === "success") {
    return (
      <div className="glass rounded-2xl border border-white/8 p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-400" />
        </div>
        <h3
          className="text-2xl font-bold text-white mb-2"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          Message Sent!
        </h3>
        <p className="text-white/50 mb-6">
          Thanks for reaching out. I'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({ name: "", email: "", subject: "", message: "" });
          }}
          className="px-5 py-2.5 rounded-lg glass glow-border text-sm text-white/70 hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl border border-white/8 p-8 space-y-6">
      {/* Name + Email row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-white/50 uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains)" }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Gopal Dahale"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-white/25 text-sm transition-all duration-200 input-glow",
              errors.name ? "border-red-500/50" : "border-white/10 hover:border-white/20"
            )}
          />
          {errors.name && (
            <p className="text-xs text-red-400">{errors.name}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-white/50 uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains)" }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="hello@example.com"
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-white/25 text-sm transition-all duration-200 input-glow",
              errors.email ? "border-red-500/50" : "border-white/10 hover:border-white/20"
            )}
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label className="block text-xs font-medium text-white/50 uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains)" }}>
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project inquiry / Freelance work"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-white placeholder:text-white/25 text-sm transition-all duration-200 input-glow"
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="block text-xs font-medium text-white/50 uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains)" }}>
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell me about your project..."
          className={cn(
            "w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-white/25 text-sm transition-all duration-200 input-glow resize-none",
            errors.message ? "border-red-500/50" : "border-white/10 hover:border-white/20"
          )}
        />
        {errors.message && (
          <p className="text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-300 shadow-glow-sm hover:shadow-glow"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
