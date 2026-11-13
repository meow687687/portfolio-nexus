"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function SiteScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const connection = (navigator as Navigator & {
      connection?: EventTarget & { saveData?: boolean };
    }).connection;
    let disposed = false;
    let generation = 0;
    let revert: (() => void) | undefined;

    const initialize = async () => {
      const currentGeneration = ++generation;
      revert?.();
      revert = undefined;

      const root = document.querySelector<HTMLElement>("main#main");
      if (
        reducedMotion.matches ||
        !finePointer.matches ||
        connection?.saveData ||
        !root?.querySelector("[data-motion-reveal], [data-motion-parallax]")
      ) {
        return;
      }

      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        if (
          disposed ||
          currentGeneration !== generation ||
          reducedMotion.matches ||
          !finePointer.matches ||
          connection?.saveData
        ) {
          return;
        }

        gsap.registerPlugin(ScrollTrigger);
        const context = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>("[data-motion-reveal]").forEach((element, index) => {
            gsap.from(element, {
              y: 24,
              opacity: 0,
              duration: 0.75,
              delay: (index % 3) * 0.06,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            });
          });

          gsap.utils.toArray<HTMLElement>("[data-motion-parallax]").forEach((element) => {
            const trigger = element.closest<HTMLElement>("[data-motion-section]") ?? element;
            gsap.to(element, {
              yPercent: -18,
              ease: "none",
              scrollTrigger: {
                trigger,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            });
          });
        }, root);
        revert = () => context.revert();
      } catch {
        // The page remains fully visible if the motion enhancement cannot load.
      }
    };

    const onEnvironmentChange = () => void initialize();
    void initialize();
    reducedMotion.addEventListener("change", onEnvironmentChange);
    finePointer.addEventListener("change", onEnvironmentChange);
    connection?.addEventListener("change", onEnvironmentChange);

    return () => {
      disposed = true;
      generation += 1;
      reducedMotion.removeEventListener("change", onEnvironmentChange);
      finePointer.removeEventListener("change", onEnvironmentChange);
      connection?.removeEventListener("change", onEnvironmentChange);
      revert?.();
    };
  }, [pathname]);

  return null;
}
