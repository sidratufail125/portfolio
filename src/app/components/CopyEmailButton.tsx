"use client";

import { useEffect, useRef, useState } from "react";

// Older/insecure contexts lack navigator.clipboard — copy via a hidden textarea
function legacyCopy(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  textarea.remove();
  return ok;
}

export default function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      try {
        ok = legacyCopy(email);
      } catch {}
    }
    setState(ok ? "copied" : "failed");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2500);
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy email address ${email}`}
        className={`inline-flex min-h-8 items-center gap-1 rounded-md border px-2.5 py-1 text-xs transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400 ${
          state === "copied"
            ? "border-emerald-400/50 text-emerald-300"
            : state === "failed"
              ? "border-red-400/50 text-red-300"
              : "border-violet-400/30 text-violet-300 hover:border-pink-400/60 hover:text-pink-300"
        }`}
      >
        {state === "copied" ? "Copied ✓" : state === "failed" ? "Copy failed" : "Copy"}
      </button>
      <span role="status" className="sr-only">
        {state === "copied" ? "Email address copied to clipboard" : state === "failed" ? "Couldn't copy the email address" : ""}
      </span>
    </>
  );
}
