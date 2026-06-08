import { css } from '~styled-system/css'

export const DesignIconCSS = css({
  width: '100px',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '16px',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  position: 'relative',
  overflow: 'visible',
  flexShrink: 0,
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent)',
    opacity: 0,
    transition: 'opacity 0.4s ease'
  },
  '& svg': {
    width: '60% !important',
    height: '60% !important',
    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
    transition: 'all 0.4s ease'
  },
  '&:hover': {
    transform: 'translateY(-8px) scale(1.05)',
    boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
    '&::before': {
      opacity: 1
    },
    '& svg': {
      filter: 'drop-shadow(0 4px 16px rgba(255,255,255,0.4))',
      transform: 'scale(1.15)'
    },
    '& span': {
      opacity: 1,
      transform: 'translateX(-50%) scale(1)'
    }
  },
  '@media(max-width:1440px)': {
    width: '90px',
    height: '90px'
  },
  '@media(max-width:1024px)': {
    width: '80px',
    height: '80px'
  },
  '@media(max-width:768px)': {
    width: '70px',
    height: '70px'
  }
})

/* Color variants for different tech categories */
export const TechColorVariant = (colorHex: string) => css({
  background: `linear-gradient(145deg, ${colorHex}30, ${colorHex}15)`,
  border: `1.5px solid ${colorHex}50`,
  boxShadow: `0 8px 24px ${colorHex}20, inset 0 1px 2px rgba(255,255,255,0.1)`,
  '&:hover': {
    background: `linear-gradient(145deg, ${colorHex}45, ${colorHex}25)`,
    boxShadow: `0 16px 48px ${colorHex}35, inset 0 1px 2px rgba(255,255,255,0.15)`,
    '& svg': {
      filter: `drop-shadow(0 0 12px ${colorHex})"`
    }
  }
})


export const LineHorizontalCSS = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  overflowX: 'visible',
  overflowY: 'visible',
  alignItems: 'flex-start',
  gap: '20px',
  height: 'auto',
  position: 'relative',
  width: '100%',
  padding: '30px 0',
  '@media(max-width:1440px)': {
    gap: '16px',
    padding: '24px 0'
  },
  '@media(max-width:1024px)': {
    gap: '12px',
    padding: '20px 0'
  },
  '@media(max-width:750px)': {
    width: '100%',
    gap: '10px',
    padding: '16px 0'
  }
})
export const TechnoContentCSS = css({
  display: 'flex',
  position: 'relative',
  justifyContent: 'space-between',
  width: 'fit-content',
  gap: '30px',
  flexDirection: 'column',
  overflow: 'visible'
})

export const TechnosContentCSS = css({
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: '700px',
  marginLeft: '100px',
  flexDirection: 'column',
  '@media(max-width:750px)': {
    marginLeft: 0,
    width: '100%'
  }
})

export const TechnoTitleCSS = css({
  fontSize: '{fontSizes.lg}'
})

export const TechnoNameCSS = css({
  position: 'absolute',
  right: '20',
  width: 'fit-content',
  height: 'fit-content',
  fontSize: '40px',
  fontFamily: 'Athena, Arial Black, sans-serif',
  fontWeight: '900',
  color: 'bg.classic',
  opacity: '0.8',
  pointerEvents: 'none',
  zIndex: 10,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  '@media(max-width:1250px)': {
    fontSize: '25px',
    top: -40,
    left: '50%',
    transform: 'translateX(-50%)'
  },
  '@media(max-width:768px)': {},
  '@media(max-width:480px)': {}
})

export const TechnoBadgeCSS = css({
  position: 'absolute',
  top: '-45px',
  left: '50%',
  transform: 'translateX(-50%) scale(0.95)',
  opacity: 0,
  pointerEvents: 'none',
  padding: '10px 14px',
  borderRadius: '999px',
  background: 'rgba(0,0,0,0.9)',
  color: 'white',
  fontSize: '{fontSizes.md}',
  lineHeight: '1.1',
  fontWeight: '800',
  whiteSpace: 'nowrap',
  transition: 'opacity 0.3s ease, transform 0.3s ease',
  zIndex: 20,
  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
  textTransform: 'capitalize',
  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: '-6px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '10px',
    height: '10px',
    bg: 'rgba(0,0,0,0.8)',
    transformOrigin: 'center',
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
  }
})

export const TechnoSelectedCSS = css({
  background: 'linear-gradient(145deg, rgba(53,172,223,0.25), rgba(53,172,223,0.1))',
  boxShadow: '0 16px 48px rgba(53,172,223,0.3), inset 0 1px 2px rgba(255,255,255,0.2), 0 0 24px rgba(53,172,223,0.2)',
  border: '1px solid rgba(53,172,223,0.4)'
})
