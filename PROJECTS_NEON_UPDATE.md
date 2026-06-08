# Projects Section - Neon Border & Flowing Ball Animation

## Changes Required

### 1. Update `projects.style.ts`

Replace the entire file with the following content:

```typescript
import { css } from '~styled-system/css'

export const ContainerBtnsCSS = css({
  display: 'flex',
  gap: '12px 16px', 
  width: '100%',    
  maxWidth: '900px', 
  margin: '0 auto',
  marginTop: '30px',
  justifyContent: 'center',
  flexWrap: 'wrap',
  
  '@media(max-width:1024px)': {
    maxWidth: '100%',
    padding: '0 20px',
    gap: '10px 12px',
    marginBottom: '40px'
  },

  '@media(max-width:768px)': {
    paddingTop: '20px',
    gap: '8px 10px'
  },

  '@media(max-width:480px)': {
    gap: '8px',
    padding: '10px 0'
  }
})

export const ContainerProjectsCSS = css({
  position: 'relative',
  alignItems: 'start',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '60px 40px',
  padding: '0 60px',
  '@media(max-width:1200px)': {
    padding: '0 40px'
  },
  '@media(max-width:768px)': {
    gridTemplateColumns: '1fr',
    gap: '40px',
    padding: '0'
  }
})

export const ContainerProjectCSS = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '16px',
  padding: '24px',
  borderRadius: '12px',
  border: '2px solid #13D5FF',
  background: 'rgba(7, 13, 26, 0.5)',
  boxShadow: '0 0 20px rgba(19, 213, 255, 0.3), inset 0 0 15px rgba(19, 213, 255, 0.05)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '10px',
    border: '1px solid rgba(19, 213, 255, 0.2)',
    pointerEvents: 'none'
  },
  
  '&:hover': {
    borderColor: '#F53C28',
    boxShadow: '0 0 30px rgba(245, 60, 40, 0.4), inset 0 0 15px rgba(245, 60, 40, 0.08)',
    transform: 'translateY(-4px)'
  },

  '& .magnetic-project-container': {
    height: '280px !important',
    position: 'relative',
    zIndex: 1,
    borderRadius: '8px',
    overflow: 'hidden',

    '@media(max-width:1024px)': {
      height: '240px !important'
    },
    '@media(max-width:768px)': {
      height: '220px !important'
    },
    '@media(max-width:480px)': {
      height: '200px !important'
    }
  }
})

export const CenterLineCSS = css({
  position: 'absolute',
  left: '50%',
  top: 0,
  bottom: 0,
  width: '2px',
  transform: 'translateX(-50%)',
  background: 'linear-gradient(180deg, #13D5FF 0%, #F53C28 100%)',
  boxShadow: '0 0 15px #13D5FF, 0 0 30px rgba(19, 213, 255, 0.5)',
  zIndex: 1,
  '@media(max-width:768px)': {
    display: 'none'
  }
})

export const FlowingBallCSS = css({
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '14px',
  height: '14px',
  borderRadius: '50%',
  background: 'radial-gradient(circle at 35% 35%, #13D5FF, #0099ff)',
  boxShadow: '0 0 14px #13D5FF, 0 0 28px rgba(19, 213, 255, 0.7)',
  zIndex: 10,
  pointerEvents: 'none'
})

export const ContainerProjectBtnsCSS = css({
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
  fontFamily: 'geistMedium',
  position: 'relative',
  zIndex: 2
})

export const ImgProjectCSS = css({
  objectFit: 'cover',
  height: '280px !important',
  width: '100%',

  '@media(max-width:1250px)': {
    height: '240px !important'
  },
  '@media(max-width:1050px)': {
    height: '220px !important'
  },
  '@media(max-width:765px)': {
    height: '220px !important',
    objectFit: 'cover'
  }
})

export const ProjectNameCSS = css({
  fontSize: '{fontSizes.lg}',
  fontWeight: 600,
  position: 'relative',
  zIndex: 2,
  '@media(max-width:768px)': {
    fontSize: '{fontSizes.md}',
    textAlign: 'center'
  }
})

export const ProjectOriginCSS = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'bg.gardienSingleColor',
  gap: '10px',
  position: 'relative',
  zIndex: 2,
  '& a': {
    position: 'relative'
  },
  '& a::after': {
    content: '""',
    position: 'absolute',
    height: '1px',
    width: '100%',
    left: 0,
    bottom: 0,
    background: 'bg.gardianBackground'
  }
})

export const ProjectDescriptionCSS = css({
  fontSize: '15px',
  lineHeight: '1.6',
  opacity: 0.75,
  maxWidth: '100%',
  color: 'bg.gardienSingleColor',
  marginTop: '4px',
  position: 'relative',
  zIndex: 2,
  '@media(max-width:768px)': {
    fontSize: '14px'
  }
})

export const ProjectsCSS = css({
  display: 'flex',
  fontSize: '{fontSizes.xs}',
  flexDirection: 'column'
})

export const BtnProjectNotFoundCSS = css({
  bg: '#E4004B',
  color: 'bg.classicReverse',
  _hover: {
    color: 'bg.classicReverse'
  }
})

export const ContainerProjectNotFoundCSS = css({
  width: '100%',
  display: 'grid',
  gridColumn: '1 / -1'
})

export const ThumbnailContainerCSS = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '20px',

  '@media(max-width:1250px)': {
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  '@media(max-width:768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px'
  },
  '@media(max-width:480px)': {
    gridTemplateColumns: '1fr',
    gap: '20px'
  }
})

export const ImgProjectOriginCSS = css({
  objectFit: 'cover',
  objectPosition: 'right',
  width: '100%',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  height: '200px !important'
})

export const ProjectLegendCSS = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const ThumbnailItemCSS = css({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  width: '98%',
  borderRadius: '12px',
  transition: 'all 0.3s ease',

  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: '#35acdf',
    backgroundColor: 'rgba(53, 172, 223, 0.1)'
  },

  '& .magnetic-project-container': {
    height: '200px',

    '@media(max-width:768px)': {
      height: '150px'
    },
    '@media(max-width:480px)': {
      height: '200px'
    }
  }
})

export const ThumbnailImageCSS = css({
  width: '100%',
  objectFit: 'cover',
  height: '200px !important',
  borderRadius: '8px',
  marginBottom: '12px',
  position: 'center',
  transition: 'transform 0.3s ease',
  objectPosition: 'center',

  '@media(max-width:768px)': {
    height: '150px'
  },
  '@media(max-width:480px)': {
    height: '200px'
  }
})

export const ThumbnailNameCSS = css({
  fontSize: '15px',
  textAlign: 'center',
  opacity: '0.6',
  maxWidth: '120px',
  lineHeight: '1.3',
  fontWeight: '500',

  '@media(max-width:480px)': {
    maxWidth: '100%',
    fontSize: '14px'
  }
})

export const NoProjectsMessageCSS = css({
  textAlign: 'center',
  fontSize: '22px',
  opacity: 0.8,

  '@media(max-width:768px)': {
    fontSize: '18px'
  }
})

export const SuggestionTextCSS = css({
  textAlign: 'center',
  fontSize: '18px',
  opacity: 0.6,
  fontStyle: 'italic'
})
```

### 2. Update `projects.tsx`

Add these imports at the top:
```typescript
import { CenterLineCSS, FlowingBallCSS } from '@/features/projects/projects.style'
```

Add this function inside the component (before the return statement):
```typescript
// Create flowing balls animation
const createFlowingBalls = () => {
  const container = projectsRef.current?.querySelector(`.${ContainerProjectsCSS}`)
  if (!container) return

  const ballCount = 5
  const balls: HTMLElement[] = []
  
  for (let i = 0; i < ballCount; i++) {
    const ball = document.createElement('div')
    ball.className = FlowingBallCSS
    ball.style.setProperty('--delay', `${i * 0.6}s`)
    ball.style.animation = `flowDown ${3 + i * 0.2}s linear infinite`
    ball.style.setProperty('animation-delay', `${i * 0.6}s`)
    container.appendChild(ball)
    balls.push(ball)
  }

  return () => {
    balls.forEach(ball => ball.remove())
  }
}
```

Add CSS animation to `styles.css`:
```css
@keyframes flowDown {
  0% {
    top: -20px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}
```

Then in the useGSAP effect, add the center line after the container query:
```typescript
// Add center line with flowing balls (desktop only)
if (window.innerWidth > 768) {
  const centerLine = document.createElement('div')
  centerLine.className = CenterLineCSS
  projectsRef.current?.querySelector(`.${ContainerProjectsCSS}`)?.appendChild(centerLine)
  
  createFlowingBalls()
}
```

### 3. Optional: Add to `styles.css` for smooth animations

Add these keyframe animations:
```css
@keyframes flowDown {
  0% {
    top: -20px;
    opacity: 0;
    transform: translate(-50%, -50%);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    top: 110%;
    opacity: 0;
    transform: translate(-50%, -50%);
  }
}
```

## Features Added:

✅ **Neon Cyan Borders** - 2px borders with glowing shadow effect
✅ **Hover Effects** - Changes to red/orange on hover with smooth transition
✅ **Center Vertical Line** - Gradient line from cyan to red in the middle
✅ **Flowing Balls** - 5 animated orbs flowing down the center line continuously
✅ **Professional Styling** - Dark background with subtle inset glow
✅ **Responsive** - Center line and balls hidden on mobile
✅ **2x2 Grid Layout** - Optimized card sizes for better layout

