import {
  FluxCSS,
  SectionCSS,
  SpacingCSS
} from '@/features/shared/components/global.style'
import {
  ContactContentCSS,
  SloganCSS,
  FooterCSS,
  MailCSS,
  GridCSS,
  DomainCSS,
  ArrowUPCSS,
  ParentArrowUPCSS
} from './contact.style'
import { gsap, useGSAP } from '@/core/gsap.config'
import { useRef } from 'react'
import { useNavDetection } from '@/features/shared/nav/hooks/use-nav-detection'
import { useThemeAttributes } from '@/features/shared/components/hooks/use-theme'
import { useSmoothScroll } from '@/features/shared/components/hooks/use-smooth-scroll'
export default function Contact () {
  const { onSmoothScroll } = useSmoothScroll(gsap)
  const themeColors = useThemeAttributes()

  useNavDetection('CONTACT', '#contact')
  const fluxRef = useRef()
  const contactRef = useRef<HTMLElement>(null)
  const sloganRef = useRef<HTMLDivElement>(null)
  const mailRef = useRef<HTMLAnchorElement>(null)
  const arrowRef = useRef<SVGSVGElement>(null)
  const footerRef = useRef<HTMLElement>(null)
  const homeElement = document.querySelector('#home')!
  
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none'
      }
    })
    .fromTo(sloganRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 0)
    .fromTo(mailRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out' }, 0.2)
    .fromTo(arrowRef.current, { opacity: 0, x: 10 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }, 0.3)
    .fromTo(footerRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.4)

    gsap.to(arrowRef.current, {
      y: 8,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    })
  })

  return (
    <section
      ref={contactRef}
      className={`${SectionCSS} ${SpacingCSS.sectionSeparator} ${GridCSS}`}
      id='contact'
    >
      <span style={{ textAlign: 'end' }}>04. CONTACT</span>
      <div className={ContactContentCSS}>
        <div ref={sloganRef} className={SloganCSS}>LET'S BRING YOUR VISION TO LIFE</div>

        <a
          ref={mailRef}
          style={{ background: themeColors.contact.btnContact }}
          className={MailCSS}
          href='https://mail.google.com/mail/?view=cm&to=ryota.oshima2026@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          ryota.oshima2026@gmail.
          <span className={DomainCSS}>com</span>
        </a>
      </div>
      <div className={ParentArrowUPCSS}>
        <svg
          ref={arrowRef}
          onClick={e => onSmoothScroll(e, homeElement)}
          className={ArrowUPCSS}
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='30'
          viewBox='0 0 23.624 36.321'
        >
          <g id='arrow-up' transform='translate(-312.098 -49.385)'>
            <path
              id='Tracé_9088'
              data-name='Tracé 9088'
              d='M335.721,64.572l-11.81-15.187v0L312.1,64.572,323.793,58.9Z'
              transform='translate(0 0)'
            />
            <path
              id='Tracé_9089'
              data-name='Tracé 9089'
              d='M330.916,75.516l2.4,22.7L335.713,75.6,333.2,74.406Z'
              transform='translate(-9.409 -12.511)'
            />
          </g>
        </svg>
      </div>
      <footer ref={footerRef} className={FooterCSS}>
        <div>© 2025 khayyer Mohamed. Tous droits réservés.</div>
        <div>business UXUI design, Web development</div>
      </footer>
      <div ref={fluxRef} className={FluxCSS}></div>
    </section>
  )
}
