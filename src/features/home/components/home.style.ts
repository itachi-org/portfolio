import { css } from '~styled-system/css'

export const HomeCSS = css({
  flexDirection: 'column',
  alignItems: 'center'
})

export const H1CSS = css({
  fontSize: '{fontSizes.xxl}',
  lineHeight: '74px',
  fontFamily: 'athena',
  '@media(max-width: 1440px)': {
    fontSize: '50px'
  },
  '@media(max-width: 1050px)': {
    fontSize: '44px'
  },
  '@media(max-width: 750px)': {
    fontSize: '36px',
    lineHeight: '52px'
  },
  '@media(max-width: 480px)': {
    fontSize: '32px',
    lineHeight: '44px'
  }
})
export const H2CSS = css({
  fontSize: '20px',
  lineHeight: '54px',
  fontFamily: 'athena',
  position: 'relative',
  padding: '3px 0 3px 0',
  '@media(max-width: 1050px)': {
    fontSize: '18px',
    lineHeight: '44px'
  },
  '@media(max-width: 750px)': {
    fontSize: '16px',
    lineHeight: '36px'
  },
  '@media(max-width: 480px)': {
    fontSize: '15px',
    lineHeight: '32px'
  }
})

export const CategoryCSS = css({
  textAlign: 'end',
  paddingTop: '10px'
})

export const PCSS = css({
  maxWidth: '500px',
  fontFamily: 'geistMedium',
  fontSize: '15px',
  color: 'text.paragraph',
  opacity: '0.9',
  lineHeight: '1.6',
  letterSpacing: '0.2px',
  margin: '0',
  textRendering: 'optimizeLegibility',
  '@media(max-width: 1050px)': {
    maxWidth: '100%'
  },
  '@media(max-width: 750px)': {
    fontSize: '14px'
  },
  '@media(max-width: 480px)': {
    fontSize: '13px'
  }
})

export const BioAndIonCSS = css({
  margin: '0 auto',
  display: 'flex',
  alignItems: 'stretch',
  height: 'fit-content',
  gap: '180px',
  marginBottom: '6vh',
  '@media(max-width: 1440px)': {
    gap: '100px'
  },
  '@media(max-width: 1050px)': {
    flexDirection: 'column',
    gap: '30px',
    alignItems: 'center'
  },
  '@media(max-width: 750px)': {
    gap: '24px'
  }
})

export const SocialCSS = css({
  display: 'flex',
  flexFlow: 'wrap',
  gap: '113px',
  '@media(max-width: 1050px)': {
    gap: '50px'
  },
  '@media(max-width: 750px)': {
    gap: '20px'
  }
})

export const PanelCSS = css({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '10px',
  flexWrap: 'wrap',
  maxWidth: '100%'
})

export const ContainerPCSS = css({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  gap: '30px'
})




export const LinkSocialCSS = css({
  cursor: 'pointer',
  position: 'relative',
  display: 'inline-block',
  opacity: 0.8,
  transition: 'opacity 0.4s ease',
  _after: {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    left: 0,
    width: '100%',
    height: '1px',
    bg: 'currentColor',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
  },
  _hover: {
    opacity: 1,
    _after: {
      transform: 'scaleX(1)',
    },
  },
})

export const CallToActionParentCSS = css({
  position: 'absolute',
  bottom: '-15vh',
  left: '25%',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 22px',
  minWidth: '140px',
  maxWidth: '260px',
  height: '50px',
  
  border: '1px solid',
  borderColor: 'text.primary',
  borderRadius: '30px', 

  bg: 'transparent',
  color: 'text.primary',
  fontFamily: 'athena',
  fontSize: '{fontSizes.md}',
  letterSpacing: '0.05em',
  cursor: 'pointer',
  
  isolation: 'isolate', 
  overflow: 'hidden',
  transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)', 

  _before: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'text.primary',
    transform: 'translateY(120%)', 
    zIndex: -1,
    transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
  },

  _hover: {
    color: 'bg.classicReverse',
    _before: {
      transform: 'translateY(0)',
    },
  },

  // Small centered underline to match original design
  _after: {
    content: '""',
    position: 'absolute',
    bottom: '-6px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '48px',
    height: '3px',
    bg: 'linear-gradient(90deg, #29d0ff, #b7ff94)',
    borderRadius: '2px',
    opacity: 0.9,
    transition: 'all 0.3s ease'
  },

  '@media(max-width: 1440px)': {
    bottom: '-12vh',
    fontSize: '14px',
    height: '45px',
    minWidth: '160px',
    maxWidth: '220px',
  },
  '@media(max-width: 1050px)': {
    position: 'relative',
    bottom: '0',
    left: '0',
    marginTop: '30px',
    height: '44px',
    minWidth: '140px',
    maxWidth: '200px',
  },
  '@media(max-width: 750px)': {
    minWidth: '160px',
    maxWidth: '220px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

export const ScrollDownCSS = css({
  fontSize: '{fontSizes.md}'
})

export const ContainerPandaCSS = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  maxWidth: '420px',
  '@media(max-width: 1440px)': {
    '& svg': {}
  },
  '@media(max-width: 1050px)': {
    maxWidth: '100%',
    '& svg': {
      display: 'none'
    }
  }
})

export const HeroImageWrapperCSS = css({
  width: '400px',
  maxWidth: '100%',
  position: 'relative',
  borderRadius: '28px',
  overflow: 'hidden',
  boxShadow: '0 40px 120px rgba(0,0,0,0.35)',
  border: '1px solid rgba(255,255,255,0.08)',
  backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))',
  transition: 'transform 0.4s ease',
  height: 'auto',
  '&:hover': {
    transform: 'translateY(-6px)'
  },
  '@media(max-width: 1440px)': {
    width: '360px'
  },
  '@media(max-width: 1050px)': {
    width: '100%'
  },
  '@media(max-width: 750px)': {
    width: '100%'
  }
})

export const HeroImageShineCSS = css({
  position: 'absolute',
  top: 0,
  left: '-35%',
  width: '70%',
  height: '100%',
  bg: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 100%)',
  transform: 'skewX(-25deg)',
  opacity: 0.35,
  pointerEvents: 'none',
})

export const ButtonContainer2CSS = css({
  border: 'solid 1px',
  borderColor: 'border.primary',
  opacity: '0',
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'athena',
  fontWeight: '300',
  transition: 'all 0.5s ease',
  letterSpacing: '1px',
  borderRadius: '16px',
  boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden'
})

export const UrbanSpriteCSS = css({
  bg: 'bg.classic',
  color: 'bg.classicReverse',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
  WebkitMaskPosition: '0 0',
  maskPosition: '0 0',
  width: '100%',
  height: '100%',
  padding: 'fit-content',
  fontFamily: 'athena',
  WebkitMask: "url('/img/urban-sprite.png')",
  mask: "url('/img/urban-sprite.png')",
  WebkitMaskSize: '3000% 100%',
  maskSize: '3000% 100%',
  border: 'none',
  cursor: 'pointer',
  _hover: {
    bg: 'bg.classicReverse'
  }
})

export const MaskCSS = css({
  color: 'bg.classic',
  position: 'absolute',
  textAlign: 'center',
  padding: 'fit-content',
  width: '101%',
  opacity: 0,
  fontFamily: 'athena',
  transform: 'translateY(50%)',
  overflow: 'hidden',
  fontWeight: 'bold'
})
