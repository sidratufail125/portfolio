"use client";

import { useState } from "react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context) — fall back to mail app
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md">
      <a
        href={`mailto:${email}`}
        className="px-4 py-2 font-mono text-sm text-white transition hover:text-violet-200 sm:text-base"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-violet-100"
      >
        {copied ? "Copied ✓" : "Copy email"}
      </button>
    </div>
  );
}
