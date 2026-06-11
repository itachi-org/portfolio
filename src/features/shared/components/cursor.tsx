import { useEffect, useRef, useState } from 'react'

const interactiveSelector = 'a, button, input, textarea, select, label, [role="button"], [data-cursor="pointer"]'
const DOT_COUNT = 8

function Cursor () {
  const dotRefs = useRef<Array<HTMLDivElement | null>>([])
  const ringRef = useRef<HTMLDivElement | null>(null)
  const target = useRef({ x: 0, y: 0 })
  const points = useRef(Array.from({ length: DOT_COUNT }, () => ({ x: 0, y: 0 })))
  const frameRef = useRef<number | null>(null)
  const [hidden, setHidden] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const animate = () => {
      points.current[0].x += (target.current.x - points.current[0].x) * 0.22
      points.current[0].y += (target.current.y - points.current[0].y) * 0.22

      for (let i = 1; i < DOT_COUNT; i += 1) {
        points.current[i].x += (points.current[i - 1].x - points.current[i].x) * 0.22
        points.current[i].y += (points.current[i - 1].y - points.current[i].y) * 0.22
      }

      points.current.forEach((point, index) => {
        const dot = dotRefs.current[index]
        if (dot) {
          dot.style.left = `${point.x}px`
          dot.style.top = `${point.y}px`
        }
      })

      if (ringRef.current) {
        ringRef.current.style.left = `${points.current[0].x}px`
        ringRef.current.style.top = `${points.current[0].y}px`
      }

      frameRef.current = window.requestAnimationFrame(animate)
    }

    frameRef.current = window.requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      target.current.x = event.clientX
      target.current.y = event.clientY
      setHidden(false)
    }

    const handleMouseLeave = () => {
      setHidden(true)
    }

    const handleMouseOver = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement
      if (targetElement.closest(interactiveSelector)) {
        setHovered(true)
      }
    }

    const handleMouseOut = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement
      if (targetElement.closest(interactiveSelector)) {
        setHovered(false)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  const ringClassName = [
    'custom-cursor-ring',
    hidden ? 'custom-cursor--hidden' : '',
    hovered ? 'custom-cursor--hover' : ''
  ]
    .filter(Boolean)
    .join(' ')

  const dotClassName = (index: number) => [
    'custom-cursor-dot',
    index === 0 ? 'custom-cursor-dot--head' : 'custom-cursor-dot--tail',
    hidden ? 'custom-cursor--hidden' : '',
    hovered ? 'custom-cursor--hover' : ''
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      {Array.from({ length: DOT_COUNT }).map((_, index) => (
        <div
          key={`cursor-dot-${index}`}
          ref={(element) => {
            dotRefs.current[index] = element
          }}
          className={dotClassName(index)}
          style={{
            opacity: 1 - index * 0.11,
            width: index === 0 ? 12 : 10 - index,
            height: index === 0 ? 12 : 10 - index
          }}
        />
      ))}
      <div ref={ringRef} className={ringClassName} />
    </>
  )
}

export default Cursor

