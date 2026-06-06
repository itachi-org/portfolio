import { useRef } from "react";

import HadesDarkIcon from "@/assets/icons/svg/hades-dark.svg?react";
import HadesLightIcon from "@/assets/icons/svg/hades-light.svg?react";

import {
  HomeCSS,
  H1CSS,
  H2CSS,
  CategoryCSS,
  PCSS,
  BioAndIonCSS,
  SocialCSS,
  PanelCSS,
  ContainerPCSS,
  ScrollDownCSS,
  LinkSocialCSS,
  ContainerPandaCSS,
  CallToActionParentCSS,
} from "./home.style";
import "@/core/gsap.config";
import { SectionCSS } from "@/features/shared/components/global.style";
import { ColorLetters } from "@/features/shared/components/color-letters";
import { Clock } from "@/features/shared/components/clock";
import { gsap, useGSAP } from "@/core/gsap.config";
import { useNavDetection } from "@/features/shared/nav/hooks/use-nav-detection";
import useStore from "@/core/store";
import { useThemeAttributes } from "@/features/shared/components/hooks/use-theme";
import type { ModesContent } from "@/data/colors";
import { useSmoothScroll } from "../../shared/components/hooks/use-smooth-scroll";

export default function Home(): JSX.Element {
  useNavDetection("K", "#home");
  const containerRef = useRef<HTMLElement | null>(null);
  const { theme } = useStore();
  const colorsTheme = useThemeAttributes() as ModesContent;
  const { onSmoothScroll } = useSmoothScroll(gsap);

  useGSAP(() => {
    if (!containerRef.current) return;

    const mainCentral = containerRef.current.querySelector(".main-central");
    const panelBottom = containerRef.current.querySelector(".panel-bottom");
    const scrollIndicator = containerRef.current.querySelector(".scroll-indicator");

    const tl = gsap.timeline();

    if (mainCentral) {
      tl.fromTo(
        mainCentral,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power4.out",
          delay: 0.3,
        },
      )
    }

    if (panelBottom) {
      tl.fromTo(
        panelBottom,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1", // Transition tuilée pour plus de fluidité
      );
    }

    if (scrollIndicator) {
      gsap.to(scrollIndicator, {
        opacity: 0.4,
        y: 8,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }

    return () => {
      tl.kill();
    };
  }, [theme]);

  return (
    <section
      ref={containerRef}
      id="home"
      className={`${SectionCSS} ${HomeCSS}`}
      style={{ transform: "translateY(6vh)" }}
    >
      <div className={`${CategoryCSS} category`}>01. HOME</div>

      <div className={`${BioAndIonCSS} main-central`}>
        <div>
          <h1 className={`${H1CSS} main-title`}>
            Hi, I am <br /> Ryota Oshima.
          </h1>
          <h2 className={`${H2CSS} subtitle`}>
            From Vision to{" "}
            <ColorLetters text="Working Product" colors={colorsTheme.colors} />
          </h2>

          <div className={`${ContainerPCSS} description`}>
            <p className={PCSS}>
              I am a passionate and results-driven Full Stack Developer and
              Blockchain Engineer with extensive experience designing,
              developing, and deploying modern web applications, decentralized
              platforms, and business-focused software solutions. My goal is
              simple: to help businesses transform ideas into reliable,
              scalable, and high-performing digital products that create
              measurable value.
            </p>
            <p className={PCSS}>
              My expertise covers the entire software development lifecycle,
              including planning, architecture design, frontend development,
              backend development, database optimization, cloud deployment,
              security implementation, performance tuning, maintenance, and
              long-term scalability planning.
            </p>
            <button
              className={CallToActionParentCSS}
              onClick={(e) => onSmoothScroll(e, "#projects")}
            >
              View Projects
            </button>
          </div>
        </div>

        <div className={ContainerPandaCSS}>
          {theme === "dark" ? (
            <HadesLightIcon width={400} height={380} />
          ) : (
            <HadesDarkIcon width={380} height={380} />
          )}
        </div>
      </div>

      <div className="panel-bottom">
        <div className={PanelCSS}>
          <div className={`${ScrollDownCSS} scroll-indicator`}>
            (scroll down)
          </div>
          <div className={SocialCSS}>
            <div>Niigata, Japan</div>
            <a
              href="mailto:ryota.oshima2026@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={LinkSocialCSS} // Ajout de la classe ici
            >
              GMAIL
            </a>
            <a
              href="https://github.com/Oshima-921"
              target="_blank"
              rel="noopener noreferrer"
              className={LinkSocialCSS} // Ajout de la classe ici
            >
              GITHUB
            </a>
            <a
              href="https://t.me/@hades02921"
              target="_blank"
              rel="noopener noreferrer"
              className={LinkSocialCSS} // Ajout de la classe ici
            >
              Telegram
            </a>
            <a
              href="https://wa.me/+819076098879"
              target="_blank"
              rel="noopener noreferrer"
              className={LinkSocialCSS} // Ajout de la classe ici
            >
              Whatsapp
            </a>
            <Clock colors={colorsTheme.colors} />
          </div>
        </div>
      </div>
    </section>
  );
}
