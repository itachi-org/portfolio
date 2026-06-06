import type { StackType } from '@/data/techno.type'
import {
  TechnoTitleCSS,
  TechnoContentCSS,
  DesignIconCSS,
  TechnoSelectedCSS,
  TechnoNameCSS,
  LineHorizontalCSS
} from '@/features/skills/components/skills-categories.style'
import { useState, useCallback, useRef, useEffect } from 'react'
import { gsap } from '@/core/gsap.config'

interface SkillsCategoriesProps {
  technos: StackType
}

const CONTAINER_STYLES = {
  display: 'flex',
  gap: '30px',
  borderTop: 'right',
  border: 'solid',

  borderWidth: '1px 0px 1px 0px',
  width: 'calc(75vw - 100px)',
  padding: '30px 0px'
} as const

export default function SkillsCategories({ technos }: SkillsCategoriesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const iconRefsRef = useRef<(HTMLDivElement | null)[]>([])

  const handleMouseEnter = useCallback((techName: string, index: number) => {
    setHoveredIndex(index)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null)
    // Reset all icons to original positions
    iconRefsRef.current.forEach(ref => {
      if (ref) {
        gsap.to(ref, {
          duration: 0.4,
          y: 0,
          x: 0,
          scale: 1,
          ease: 'power2.out'
        })
      }
    })
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      iconRefsRef.current.forEach(ref => {
        if (ref && hoveredIndex === null) {
          const iconRect = ref.getBoundingClientRect()
          const iconCenterX = iconRect.left - rect.left + iconRect.width / 2
          const iconCenterY = iconRect.top - rect.top + iconRect.height / 2

          const dx = mouseX - iconCenterX
          const dy = mouseY - iconCenterY
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 150

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist
            const angle = Math.atan2(dy, dx)

            gsap.to(ref, {
              duration: 0.4,
              x: Math.cos(angle) * force * 20,
              y: Math.sin(angle) * force * 20,
              scale: 1 + force * 0.1,
              ease: 'power2.out'
            })
          } else {
            gsap.to(ref, {
              duration: 0.4,
              x: 0,
              y: 0,
              scale: 1,
              ease: 'power2.out'
            })
          }
        }
      })
    }

    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [hoveredIndex])

  return (
    <div className={TechnoContentCSS} ref={containerRef}>
      <div className={TechnoTitleCSS}>{technos.title}</div>
      
      <div className={LineHorizontalCSS}>
        {technos.technos.map((techno, index) => (
          <div
            key={`${techno.name}-${index}`}
            ref={el => { iconRefsRef.current[index] = el }}
            className={`${DesignIconCSS} ${hoveredIndex === index ? TechnoSelectedCSS : ''}`}
            onMouseEnter={() => handleMouseEnter(techno.name, index)}
            onMouseLeave={handleMouseLeave}
            style={{
              willChange: 'transform'
            }}
          >
            <techno.IconComponent width={40} height={40} />
          </div>
        ))}
        
        {hoveredIndex !== null && (
          <div className={TechnoNameCSS}>
            {technos.technos[hoveredIndex]?.name}
          </div>
        )}
      </div>
    </div>
  )
}