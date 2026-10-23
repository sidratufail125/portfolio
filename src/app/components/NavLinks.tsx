"use client";

import { useEffect, useState } from "react";

type Link = { href: string; label: string };

export default function NavLinks({ links }: { links: Link[] }) {
  const [active, setActive] = useState(links[0]?.href);

  useEffect(() => {
    let frame = 0;

    // A section is active once its top passes 35% of the viewport height
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = links[0]?.href;
      for (const link of links) {
        const section = document.querySelector(link.href);
        if (section && section.getBoundingClientRect().top <= line) {
          current = link.href;
        }
      }
      // At the very bottom, the last section may never reach the line
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = links[links.length - 1]?.href;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [links]);

  return (
    <ul className="hidden items-center gap-8 md:flex">
      {links.map((link) => {
        const isActive = link.href === active;
        return (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setActive(link.href)}
              aria-current={isActive ? "location" : undefined}
              className={`relative inline-block py-1 text-lg transition-colors ${
                isActive ? "text-violet-400" : "text-zinc-300 hover:text-white"
              }`}
            >
              {link.label}
              <span
                aria-hidden
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-violet-500 to-pink-500 transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
