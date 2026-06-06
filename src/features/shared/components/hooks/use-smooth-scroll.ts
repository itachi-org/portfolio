import type { MouseEvent } from 'react'
import useStore from '@/core/store'

export const useSmoothScroll = (gsap: any) => {
  const { setIsMobileMenuOpen } = useStore()

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const onSmoothScroll = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement | SVGSVGElement>,
    target: string | HTMLElement | null
  ): void => {
    e.preventDefault()

    // Gérer les deux types de target
    if (!target) return

    const targetElement = typeof target === 'string' 
      ? document.querySelector(target)
      : target

    if (targetElement) {
      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: targetElement, offsetY: 80 },
        ease: 'power2.inOut'
      })
    }

    closeMobileMenu()
  }

  return { onSmoothScroll, closeMobileMenu }
}