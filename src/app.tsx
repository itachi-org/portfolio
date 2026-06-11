import { useEffect, useState } from 'react'
import {
  ContainerCSS,
  SceneCSS
} from '@/features/shared/components/global.style'
import Nav from './features/shared/nav/components/nav'
import Home from './features/home/components/home'
import Skills from './features/skills/components/skills'
import Projects from './features/projects/projects'
import About from './features/about/components/about'
import Contact from './features/contact/components/contact'
import Cursor from './features/shared/components/cursor'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

function App () {
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isLoaded) return

    const interval = window.setInterval(() => {
      setProgress((current) => {
        const nextValue = Math.min(100, current + 4)

        if (nextValue === 100) {
          window.setTimeout(() => setIsLoaded(true), 220)
          window.clearInterval(interval)
        }

        return nextValue
      })
    }, 40)

    return () => window.clearInterval(interval)
  }, [isLoaded])

  return (
    <>
      <Cursor />

      {!isLoaded && (
        <div className="preloader-overlay">
          <div className="preloader-wrapper">
            <div className="preloader-label">Loading</div>
            <div className="preloader-percent">{progress}%</div>
            <div className="preloader-bar">
              <div
                className="preloader-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      <div className={ContainerCSS}>
        <div className={SceneCSS}>
          <Nav />
          <main>
            <Home />
            <Skills />
            <Projects />
            <About />
            <Contact />
          </main>
        </div>
      </div>
    </>
  )
}

export default App

