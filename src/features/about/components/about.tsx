import { useRef, type ReactElement } from 'react'
import { useGSAP } from '@/core/gsap.config'
import { gsap } from '@/core/gsap.config'
import { useNavDetection } from '../../shared/nav/hooks/use-nav-detection'
import { useThemeAttributes } from '../../shared/components/hooks/use-theme'
import {
  SectionCSS,
  SpacingCSS,
  ZoneCategoryCSS
} from '@/features/shared/components/global.style'
import {
  AboutCardCSS,
  AboutCardReverseCSS,
  AboutContainerCSS,
  AboutDescriptionCSS,
  AboutHeadingCSS,
  AboutLetterCSS,
  AboutHeroCSS,
  AboutHeroDescriptionCSS,
  AboutHeroKeyItemCSS,
  AboutHeroKeyListCSS,
  AboutHeroLeftCSS,
  AboutHeroPanelCSS,
  AboutHeroRightCSS,
  AboutHeroSummaryCSS,
  AboutHeroTitleCSS,
  AboutImageCaptionCSS,
  AboutImageCSS,
  AboutImageWrapperCSS,
  AboutLabelCSS,
  AboutSectionCSS,
  AboutTextCSS,
  AboutCardTitleCSS
} from './about.style'

import about1 from '@/assets/img/my/1.png?url'
import about2 from '@/assets/img/my/2.png?url'
import about3 from '@/assets/img/my/3.png?url'
import about4 from '@/assets/img/my/4.png?url'
import about5 from '@/assets/img/my/5.png?url'
import about6 from '@/assets/img/my/6.png?url'
import about7 from '@/assets/img/my/7.png?url'
import about8 from '@/assets/img/my/8.png?url'

const aboutItems = [
  {
    title: 'Professional Presence',
    subtitle: 'Boardroom-ready leadership and polish',
    caption: 'Portrait that captures the professional confidence I bring to client meetings, strategy discussions, and product presentations.',
    description:
      'This image is about more than appearance—it is a visual reflection of the clarity, decisiveness, and executive-level communication I bring to every engagement. I translate business goals into technical direction, align teams around outcomes, and present solutions with credibility.',
    image: about1
  },
  {
    title: 'Competitive Spirit',
    subtitle: 'Machine-like focus from the tennis court',
    caption: 'A moment of athletic discipline illustrating how sports sharpen my development mindset.',
    description:
      'Tennis teaches precision, mental resilience, and rapid adaptation. In product development, I apply the same competitive edge to sprint execution, quality assurance, and solving complex problems under tight deadlines.',
    image: about2
  },
  {
    title: 'Balanced Perspective',
    subtitle: 'Creative calm by the sea',
    caption: 'A seaside scene that represents how I balance creative energy with technical structure.',
    description:
      'Time near the ocean helps me pause, reflect, and return to work with a clearer sense of purpose. This balance fuels my ability to create thoughtful experiences that are both elegant and usable.',
    image: about3
  },
  {
    title: 'Graduation Achievement',
    subtitle: 'Academic foundation built on practical rigor',
    caption: 'A milestone moment symbolizing the discipline and teamwork that shaped my engineering foundation.',
    description:
      'This milestone honors the years of study, collaborative projects, and systems thinking that formed my technical base. My academic background remains a strong influence in the way I approach architecture, code quality, and sustainable product development.',
    image: about4
  },
  {
    title: 'Developer Flow',
    subtitle: 'Modern workspaces where collaboration thrives',
    caption: 'A modern workspace snapshot representing the environments where I do my best work.',
    description:
      'I thrive in environments where product, design, and engineering align around clear goals. This image reflects the flow state I seek: disciplined execution, strong collaboration, and a focus on delivering real user value.',
    image: about5
  },
  {
    title: 'Family Support',
    subtitle: 'A personal foundation behind professional strength',
    caption: 'A real family moment with the people who support me through every challenge and milestone.',
    description:
      'This is my family — the support system that gives me perspective, stability, and the emotional bandwidth to take on ambitious work. Their encouragement makes it possible to sustain commitment, accountability, and resilience through every project.',
    image: about6
  },
  {
    title: 'Cultural Roots',
    subtitle: 'Heritage, discipline, and thoughtful craftsmanship',
    caption: 'A family photo from my heritage that reminds me how craft, patience, and quality were passed down through generations.',
    description:
      'This image is of my family and the cultural values that shape how I work. It reflects the respect for detail, discipline, and consistency I carry into software craftsmanship, ensuring what I build is precise, dependable, and thoughtful for both users and maintainers.',
    image: about7
  },
  {
    title: 'Nature-Driven Focus',
    subtitle: 'Strategic clarity from mountain trails',
    caption: 'Outdoor exploration that sharpens concentration and long-term vision.',
    description:
      'When I step into nature, I regain clarity and strategic perspective. Those refreshed insights help me return to projects with a stronger sense of purpose, focus, and long-term planning.',
    image: about8
  }
]

export default function About(): ReactElement {
  const aboutRef = useRef<HTMLElement | null>(null)
  const themeColors = useThemeAttributes()
  const accentColor = themeColors.colors?.[0] || '#13D5FF'

  useNavDetection('ABOUT', '#about')

  useGSAP(
    () => {
      const heroColumns = aboutRef.current?.querySelectorAll<HTMLElement>('.about-hero-column')
      const cards = aboutRef.current?.querySelectorAll<HTMLElement>('.about-card')

      if (heroColumns) {
        gsap.fromTo(
          heroColumns,
          { opacity: 0, y: 24, x: -28 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.88,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: aboutRef.current,
              start: 'top 80%',
              once: true
            }
          }
        )
      }

      cards?.forEach((card, index) => {
        const direction = index % 2 === 0 ? -88 : 88
        gsap.fromTo(
          card,
          { opacity: 0, x: direction, y: 24 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.96,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true
            }
          }
        )
      })
    },
    { scope: aboutRef, dependencies: [accentColor] }
  )

  return (
    <section id="about" ref={aboutRef} className={`${SpacingCSS.sectionSeparator} ${SectionCSS}`}>
      <div className={ZoneCategoryCSS}>
        <div className={AboutHeadingCSS}>
          {['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E'].map((letter, index) => {
            const colorIndex = index % 2 === 0 ? 0 : 2;
            const color = themeColors.colors?.[colorIndex] || (index % 2 === 0 ? '#13D5FF' : '#F53C28');
            return (
              <span
                key={index}
                className={AboutLetterCSS}
                style={{
                  color: color,
                  animationDelay: `${index * 0.1}s`,
                  transition: 'all 0.3s ease'
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
        <span className="category-section">04. ABOUT ME</span>
      </div>

      <div className={AboutSectionCSS}>
        <div className={AboutHeroCSS}>
          <div className={`${AboutHeroLeftCSS} about-hero-column`}>
            <div className={AboutHeroTitleCSS}>Professional Background & Technical Expertise</div>
            <div className={AboutHeroDescriptionCSS}>
              These eight cards highlight the personal and professional experiences that shape my thinking as a full-stack engineer. From the confidence of client-facing delivery to the clarity earned in nature, each image represents a distinct facet of how I build products and collaborate with teams.
            </div>
          </div>

          <div className={`${AboutHeroRightCSS} about-hero-column`}>
            <div className={AboutHeroPanelCSS}>
              <div className={AboutHeroSummaryCSS}>
                I approach every engagement with a disciplined process: define goals clearly, design for user impact, and deliver technically sound solutions that scale. These experiences show how I balance leadership, creativity, technical depth, and long-term focus.
              </div>
              <div className={AboutHeroKeyListCSS}>
                <div className={AboutHeroKeyItemCSS}>Strategic product storytelling</div>
                <div className={AboutHeroKeyItemCSS}>Thoughtful execution under pressure</div>
                <div className={AboutHeroKeyItemCSS}>Cross-functional collaboration with clarity</div>
                <div className={AboutHeroKeyItemCSS}>Enduring focus from discipline and nature</div>
              </div>
            </div>
          </div>
        </div>

        <div className={AboutContainerCSS}>
          {aboutItems.map((item, index) => (
            <div
              key={item.title}
              className={`${AboutCardCSS} about-card ${index % 2 === 1 ? AboutCardReverseCSS : ''}`}
            >
              <div className={AboutImageWrapperCSS}>
                <img className={AboutImageCSS} src={item.image} alt={item.title} />
                <div className={AboutImageCaptionCSS}>{item.caption}</div>
              </div>
              <div className={AboutTextCSS}>
                <div className={AboutLabelCSS}>{item.subtitle}</div>
                <div className={AboutCardTitleCSS}>{item.title}</div>
                <div className={AboutDescriptionCSS}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

