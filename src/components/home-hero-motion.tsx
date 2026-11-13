"use client";

import { useEffect } from "react";

export function HomeHeroMotion() {
  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    let disposed = false;
    let revert: (() => void) | undefined;

    const initialize = async () => {
      if (disposed || motionPreference.matches || connection?.saveData) return;
      try {
        const { gsap } = await import("gsap");
        const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
        const scrollTriggerModule = hasFinePointer
          ? await import("gsap/ScrollTrigger")
          : null;
        if (disposed || motionPreference.matches) return;

        if (scrollTriggerModule) gsap.registerPlugin(scrollTriggerModule.ScrollTrigger);
        const root = document.querySelector<HTMLElement>(".home-hero");
        const words = gsap.utils.toArray<HTMLElement>("[data-hero-word]");
        const monogram = root?.querySelector<HTMLElement>("[data-hero-monogram]");
        const linework = root?.querySelector<SVGSVGElement>("[data-hero-linework]");
        if (!root || words.length === 0 || !monogram) return;

        const context = gsap.context(() => {
          gsap.fromTo(
            words,
            { yPercent: 62, rotateX: -12, opacity: 0.72 },
            {
              yPercent: 0,
              rotateX: 0,
              opacity: 1,
              duration: 1.05,
              stagger: 0.14,
              ease: "power3.out",
              clearProps: "transform,opacity",
            },
          );

          const linePaths = linework?.querySelectorAll("path");
          if (linePaths?.length) {
            gsap.fromTo(
              linePaths,
              { strokeDashoffset: 1 },
              { strokeDashoffset: 0, duration: 1.6, stagger: 0.18, delay: 0.25, ease: "power2.out" },
          );
          }

          if (hasFinePointer) {
            const scrollTrigger = {
              trigger: root,
              start: "top top",
              end: "bottom top",
              scrub: 0.7,
            };
            gsap.to(monogram, { yPercent: -10, rotate: -1.2, ease: "none", scrollTrigger });
            if (linework) {
              gsap.to(linework, { yPercent: 12, rotate: 1.2, ease: "none", scrollTrigger });
            }
          }
        }, root);
        revert = () => context.revert();
      } catch {
        // The HTML/CSS hero remains complete when motion enhancement is unavailable.
      }
    };

    const onMotionPreferenceChange = () => {
      if (motionPreference.matches) {
        revert?.();
        revert = undefined;
      } else {
        void initialize();
      }
    };

    void initialize();
    motionPreference.addEventListener("change", onMotionPreferenceChange);

    return () => {
      disposed = true;
      motionPreference.removeEventListener("change", onMotionPreferenceChange);
      revert?.();
    };
  }, []);

  return null;
}
