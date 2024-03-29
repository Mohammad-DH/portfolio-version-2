"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";
import Lenis from "@studio-freight/lenis";
import Guide from "./clientComponent/section1_guide";
import Title from "./clientComponent/section3_title";
import Name from "./clientComponent/section2_name";
import Skills from "./clientComponent/section4_skills";
import Experience from "./clientComponent/section5_experience";
import Contact from "./clientComponent/section6_contact";
import { useEffect, useState } from "react";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        scrub: true,
      },
    });

    masterTimeline.to(".TEST", {
      translateZ: 500,
      duration: 1.5,
    });

    masterTimeline.to(".TEST2", {
      translateZ: 500,
      duration: 1.5,
    });

    masterTimeline.to(".TEST3", {
      translateZ: 500,
      duration: 1.5,
    });

    masterTimeline.to(".TEST4", {
      translateZ: 500,
      duration: 1.5,
    });

    masterTimeline.to(".TEST5", {
      translateZ: 500,
      duration: 1.5,
    });

    masterTimeline.to(".TEST6", {
      translateZ: 0,
      duration: 1.5,
    });

    return () => {
      masterTimeline.kill();
    };
  }, []);

  // let value = parseInt(e.animate.value);

  // // card 1 opacity
  // if (300 < value && value < 500) {
  //   gsap.to(".CARD1", {
  //     opacity: 1 - (value - 300) / 200,
  //   });
  // }
  // // card 2 blur
  // if (500 < value && value < 2000 && 0 < Math.abs(10 - value * 0.007)) {
  //   gsap.to(".CARD2", {
  //     filter: `blur(${Math.abs(10 - value * 0.007)}px)`,
  //   });
  // }
  // // card 2 opacity
  // if (1800 < value && value < 2000) {
  //   gsap.to(".CARD2", {
  //     opacity: 1 - (value - 1800) / 200,
  //   });
  // }
  // // card 3 blur
  // if (2000 < value && value < 3500 && 0 < Math.abs(21 - value * 0.007)) {
  //   gsap.to(".CARD3", {
  //     filter: `blur(${Math.abs(21 - value * 0.007)}px)`,
  //   });
  // }
  // // card 3 opacity
  // if (3300 < value && value < 3500) {
  //   gsap.to(".CARD3", {
  //     opacity: 1 - (value - 3300) / 200,
  //   });
  // }
  // // card 4 blur
  // if (3400 < value && value < 5000 && 0 < Math.abs(31.1 - value * 0.007)) {
  //   gsap.to(".CARD4", {
  //     filter: `blur(${Math.abs(31.1 - value * 0.007)}px)`,
  //   });
  // }
  // // card 4 opacity
  // if (4800 < value && value < 5000) {
  //   gsap.to(".CARD4", {
  //     opacity: 1 - (value - 4800) / 200,
  //   });
  // }
  // // card 5 blur
  // if (4950 < value && value < 6500 && 0 < Math.abs(41.5 - value * 0.007)) {
  //   gsap.to(".CARD5", {
  //     filter: `blur(${Math.abs(41.5 - value * 0.007)}px)`,
  //   });
  // }
  // // card 5 pointerEvent
  // if (5900 > value) {
  //   gsap.to(".experienceText", {
  //     pointerEvents: "none",
  //   });
  // }
  // if (5900 < value && value < 6000) {
  //   gsap.to(".experienceText", {
  //     pointerEvents: "all",
  //   });
  // }
  // if (value > 6000) {
  //   gsap.to(".experienceText", {
  //     pointerEvents: "none",
  //   });
  // }
  // // card 5 opacity
  // if (6300 < value && value < 6500) {
  //   gsap.to(".CARD5", {
  //     opacity: 1 - (value - 6300) / 200,
  //   });
  // }
  // // card 6 blur
  // if (6400 < value && value < 7500 && 0 < Math.abs(52.5 - value * 0.007)) {
  //   gsap.to(".CARD6", {
  //     filter: `blur(${Math.abs(52.5 - value * 0.007)}px)`,
  //   });
  // }

  return (
    <main className={[styles.wrapper].join(" ")}>
      <Guide />
      <Name />
      <Title />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
