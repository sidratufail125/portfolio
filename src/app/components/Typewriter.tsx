"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 80;
const DELETE_MS = 40;
const HOLD_MS = 1600;
const GAP_MS = 300;

export default function Typewriter({ words }: { words: string[] }) {
  // Start with the first word fully typed so the server-rendered HTML
  // (and visitors without JS) still show a complete title.
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const word = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), HOLD_MS);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, GAP_MS);
    } else {
      timeout = setTimeout(
        () =>
          setText(
            deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1),
          ),
        deleting ? DELETE_MS : TYPE_MS,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span aria-label={words.join(", ")} role="text">
      <span
        aria-hidden
        className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
      >
        {text}
      </span>
      <span
        aria-hidden
        className="ml-1 inline-block w-[3px] translate-y-1 animate-blink bg-violet-400 motion-reduce:animate-none"
      >
        &nbsp;
      </span>
    </span>
  );
}
