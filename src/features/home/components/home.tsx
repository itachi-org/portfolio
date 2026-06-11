import { useRef, type ReactElement } from "react";

import profileImage from "@/assets/img/9.png?url";

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
  HeroImageWrapperCSS,
  HeroImageShineCSS,
  CallToActionParentCSS,
} from "./home.style";
import "@/core/gsap.config";
import { SectionCSS } from "@/features/shared/components/global.style";
import { ColorLetters } from "@/features/shared/components/color-letters";
import { Clock } from "@/features/shared/components/clock";
import { gsap, useGSAP } from "@/core/gsap.config";
import { useNavDetection } from "@/features/shared/nav/hooks/use-nav-detection";
import { useThemeAttributes } from "@/features/shared/components/hooks/use-theme";
import type { ModesContent } from "@/data/colors";
import { useSmoothScroll } from "../../shared/components/hooks/use-smooth-scroll";

export default function Home(): ReactElement {
  useNavDetection("K", "#home");
  const containerRef = useRef<HTMLElement | null>(null);
  const heroImageRef = useRef<HTMLImageElement | null>(null);
  const heroOverlayRef = useRef<HTMLDivElement | null>(null);
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

    if (heroImageRef.current) {
      tl.fromTo(
        heroImageRef.current,
        { opacity: 0, y: 40, scale: 0.98, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.4,
          ease: 'power3.out',
          delay: 0.3,
        },
        0,
      );
    }

    if (heroOverlayRef.current) {
      gsap.fromTo(
        heroOverlayRef.current,
        { xPercent: -100 },
        {
          xPercent: 120,
          duration: 2.4,
          ease: 'power1.inOut',
          repeat: -1,
          repeatDelay: 2,
        },
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

    if (heroImageRef.current) {
      gsap.to(heroImageRef.current, {
        scale: 1.01,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    return () => {
      tl.kill();
    };
  }, [colorsTheme]);

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
          <div className={HeroImageWrapperCSS}>
            <img
              ref={heroImageRef}
              src={profileImage}
              alt="Profile"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '0',
                display: 'block'
              }}
            />
            <div ref={heroOverlayRef} className={HeroImageShineCSS} />
          </div>
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
              href="https://github.com/oshima921"
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

