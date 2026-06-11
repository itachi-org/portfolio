import type { StackType } from '@/data/techno.type'
import {
  TechnoTitleCSS,
  TechnoContentCSS,
  DesignIconCSS,
  TechnoSelectedCSS,
  TechnoBadgeCSS,
  LineHorizontalCSS
} from '@/features/skills/components/skills-categories.style'
import { useState, useCallback, useRef, useEffect } from 'react'
import { gsap } from '@/core/gsap.config'

interface SkillsCategoriesProps {
  technos: StackType
}

// Color mapping for different tech categories
const getTechColor = (techName: string): string => {
  const colorMap: Record<string, string> = {
    'React.js': '#61dafb', 'Next.js': '#ffffff', 'Vue.js': '#4fc08d', 'Angular': '#dd0031', 'HTML5': '#e34c26',
    'Node.js': '#68a063', 'Express.js': '#90c53f', 'Python': '#3776ab', 'PHP': '#777bb4', 'Django': '#092e20',
    'MongoDB': '#13aa52', 'PostgreSQL': '#336791', 'MySQL': '#005e87', 'Firebase': '#ffa400',
    'Ethereum': '#627eea', 'Solidity': '#aa6c39', 'Web3.js': '#f16822', 'Blockchain': '#f7931a',
    'TypeScript': '#3178c6', 'JavaScript': '#f7df1e', 'Docker': '#2496ed', 'Kubernetes': '#326ce5',
    'Git': '#f1502f', 'Linux': '#fcc624', 'AWS': '#ff9900', 'Azure': '#0078d4',
    'TailwindCSS': '#06b6d4', 'GraphQL': '#e10098', 'Rust': '#ce422b', 'Laravel': '#ff2d20',
    'Smart Contracts': '#f16822', 'DApp Development': '#f7931a', 'NFT Development': '#e0ae42',
    'Ruby on Rails': '#cc0000', 'Redis': '#dc382d', 'API Integration': '#00d4ff', 'Full Stack Development': '#ff6b6b'
  }
  return colorMap[techName] || '#35acdf'
}

export default function SkillsCategories({ technos }: SkillsCategoriesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const iconRefsRef = useRef<(HTMLDivElement | null)[]>([])

  const handleMouseEnter = useCallback((_techName: string, index: number) => {
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
              willChange: 'transform',
              background: `linear-gradient(145deg, ${getTechColor(techno.name)}30, ${getTechColor(techno.name)}15)`,
              border: `1.5px solid ${getTechColor(techno.name)}50`,
              boxShadow: `0 8px 24px ${getTechColor(techno.name)}20, inset 0 1px 2px rgba(255,255,255,0.1)`
            }}
          >
            <span className={TechnoBadgeCSS}>{techno.name}</span>
            <techno.IconComponent width={72} height={72} />
          </div>
        ))}
      </div>
    </div>
  )
}
