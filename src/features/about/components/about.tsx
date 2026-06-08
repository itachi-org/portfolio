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
    caption: 'A family moment that underscores the long-term support behind every achievement.',
    description:
      'The support of loved ones gives me perspective, stability, and the emotional bandwidth to take on ambitious work. That foundation makes it possible to sustain commitment, accountability, and resilience through every project.',
    image: about6
  },
  {
    title: 'Cultural Roots',
    subtitle: 'Heritage, discipline, and thoughtful craftsmanship',
    caption: 'A cultural moment that influences my respect for quality, detail, and consistency.',
    description:
      'My heritage informs my approach to craftsmanship, patience, and quality. I take pride in building software that is precise, dependable, and considerate of both users and maintainers.',
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
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 503.045 33.5">
            <defs>
              <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={themeColors.colors?.[0] || '#13D5FF'} />
                <stop offset="100%" stopColor={themeColors.colors?.[2] || '#F53C28'} />
              </linearGradient>
            </defs>
            <g>
              <path d="M29.3,27.6a16.438,16.438,0,0,1-12.649,5.9,16.132,16.132,0,0,1-8.326-2.25,16.79,16.79,0,0,1-6.075-6.1A16.353,16.353,0,0,1,0,16.75a16.351,16.351,0,0,1,2.25-8.4,16.8,16.8,0,0,1,6.075-6.1A16.132,16.132,0,0,1,16.651,0a16.283,16.283,0,0,1,6.625,1.375A16.657,16.657,0,0,1,28.75,5.25L28.1,6a15.23,15.23,0,0,0-11.45-5,9.189,9.189,0,0,0-5.6,1.851A12.209,12.209,0,0,0,7.226,7.776Q5.9,10.8,5.9,16.75t1.325,8.976a12.209,12.209,0,0,0,3.824,4.925,9.187,9.187,0,0,0,5.6,1.849,15.3,15.3,0,0,0,12-5.649Z" />
              <path d="M55.5.3h5.649V33.2H55.5V17.3H41.55V33.2H35.9V.3H41.55v16H55.5Z" />
              <path d="M101.448,16.75A16.266,16.266,0,0,1,99.2,25.1a16.99,16.99,0,0,1-6.074,6.125,16.451,16.451,0,0,1-16.65.024,16.777,16.777,0,0,1-6.075-6.1,16.35,16.35,0,0,1-2.25-8.4,16.351,16.351,0,0,1,2.25-8.4,16.787,16.787,0,0,1,6.075-6.1,16.447,16.447,0,0,1,16.65.025A16.99,16.99,0,0,1,99.2,8.4a16.265,16.265,0,0,1,2.25,8.35m-5.9,0q0-5.949-1.351-8.975a12.606,12.606,0,0,0-3.8-4.924,9.071,9.071,0,0,0-5.6-1.8,8.938,8.938,0,0,0-5.6,1.8,12.205,12.205,0,0,0-3.824,4.924Q74.048,10.8,74.049,16.75t1.325,8.976A12.205,12.205,0,0,0,79.2,30.65a8.911,8.911,0,0,0,5.6,1.85,9.044,9.044,0,0,0,5.6-1.85,12.606,12.606,0,0,0,3.8-4.924q1.352-3.026,1.351-8.976" />
            </g>
          </svg>
        </div>
        <span className="category-section">04. ABOUT ME</span>
      </div>

      <div className={AboutSectionCSS}>
        <div className={AboutHeroCSS}>
          <div className={`${AboutHeroLeftCSS} about-hero-column`}>
            <div className={AboutHeroTitleCSS}>A more detailed look at my story, values, and craft.</div>
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
