import { css } from '~styled-system/css'

export const AboutSectionCSS = css({
  display: 'grid',
  gap: '30px',
  paddingBottom: '40px',
  '@media(max-width: 768px)': {
    gap: '20px'
  }
})

export const AboutHeroCSS = css({
  display: 'grid',
  gridTemplateColumns: '1.4fr 1fr',
  gap: '36px',
  alignItems: 'start',
  padding: '0 10px',
  '@media(max-width: 980px)': {
    gridTemplateColumns: '1fr',
    gap: '24px'
  },
  width: '100%'
})

export const AboutHeroLeftCSS = css({
  display: 'grid',
  gap: '22px'
})

export const AboutHeroRightCSS = css({
  display: 'grid',
  gap: '18px'
})

export const AboutHeroTitleCSS = css({
  fontSize: '{fontSizes.5xl}',
  fontFamily: 'athena',
  lineHeight: '1.02',
  letterSpacing: '-0.045em',
  maxWidth: '760px',
  '@media(max-width: 980px)': {
    fontSize: '{fontSizes.4xl}'
  },
  '@media(max-width: 640px)': {
    fontSize: '{fontSizes.3xl}',
    maxWidth: '100%'
  },
  '@media(max-width: 480px)': {
    fontSize: '{fontSizes.2xl}'
  },
  '@media(max-width: 360px)': {
    fontSize: '{fontSizes.xl}'
  }
})

export const AboutHeroDescriptionCSS = css({
  fontSize: '{fontSizes.lg}',
  maxWidth: '720px',
  lineHeight: '1.9',
  color: '#c9e1ff',
  opacity: 0.9,
  '@media(max-width: 980px)': {
    fontSize: '{fontSizes.base}'
  },
  '@media(max-width: 640px)': {
    fontSize: '{fontSizes.sm}',
    lineHeight: '1.7'
  },
  '@media(max-width: 480px)': {
    fontSize: '{fontSizes.xs}',
    lineHeight: '1.6'
  }
})

export const AboutHeroPanelCSS = css({
  display: 'grid',
  gap: '20px',
  padding: '28px',
  borderRadius: '28px',
  background: 'rgba(7, 13, 26, 0.95)',
  border: '1px solid rgba(19, 213, 255, 0.18)',
  boxShadow: '0 24px 80px rgba(19, 213, 255, 0.06)',
  '@media(max-width: 980px)': {
    padding: '22px'
  },
  '@media(max-width: 640px)': {
    padding: '18px'
  }
})

export const AboutHeroSummaryCSS = css({
  fontSize: '{fontSizes.base}',
  lineHeight: '1.95',
  color: '#e5f2ff',
  opacity: 0.94,
  '@media(max-width: 980px)': {
    fontSize: '{fontSizes.sm}',
    lineHeight: '1.85'
  },
  '@media(max-width: 640px)': {
    fontSize: '{fontSizes.xs}',
    lineHeight: '1.7'
  },
  '@media(max-width: 480px)': {
    fontSize: '13px',
    lineHeight: '1.6'
  }
})

export const AboutHeroKeyListCSS = css({
  display: 'grid',
  gap: '12px',
  '@media(max-width: 640px)': {
    gap: '10px'
  }
})

export const AboutHeroKeyItemCSS = css({
  fontSize: '{fontSizes.sm}',
  fontWeight: 700,
  padding: '14px 18px',
  borderRadius: '16px',
  background: 'rgba(19, 213, 255, 0.08)',
  border: '1px solid rgba(19, 213, 255, 0.12)',
  color: '#b8ecff',
  '@media(max-width: 640px)': {
    fontSize: '{fontSizes.xs}',
    padding: '12px 14px'
  }
})

export const AboutTopTextCSS = css({
  display: 'grid',
  gap: '16px',
  padding: '0 10px'
})

export const AboutTitleCSS = css({
  fontSize: '{fontSizes.4xl}',
  fontFamily: 'athena',
  letterSpacing: '-0.04em',
  lineHeight: '1.05',
  '@media(max-width: 768px)': {
    fontSize: '{fontSizes.3xl}'
  },
  '@media(max-width: 640px)': {
    fontSize: '{fontSizes.2xl}',
    width: '100%',
  },
  '@media(max-width: 480px)': {
    fontSize: '{fontSizes.xl}'
  }
})

export const AboutSubtitleCSS = css({
  fontSize: '{fontSizes.md}',
  opacity: 0.75,
  maxWidth: '680px',
  lineHeight: '1.7',
  color: '#b9d9ff',
  '@media(max-width: 768px)': {
    fontSize: '{fontSizes.sm}'
  },
  '@media(max-width: 480px)': {
    fontSize: '{fontSizes.xs}'
  }
})

export const AboutContainerCSS = css({
  display: 'grid',
  gap: '42px',
  padding: '0 10px',
  '@media(max-width: 980px)': {
    gap: '28px'
  }
})

export const AboutCardCSS = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '32px',
  padding: '36px',
  borderRadius: '28px',
  background: 'rgba(6, 8, 18, 0.95)',
  border: '1px solid rgba(19, 213, 255, 0.16)',
  boxShadow: '0 24px 110px rgba(0, 157, 255, 0.08)',
  width: '100%',
  '@media(max-width: 980px)': {
    flexDirection: 'column',
    gap: '24px',
    padding: '28px'
  },
  '@media(max-width: 640px)': {
    gap: '18px',
    padding: '20px'
  }
})

export const AboutCardReverseCSS = css({
  flexDirection: 'row-reverse',
  '@media(max-width: 980px)': {
    flexDirection: 'column'
  }
})

export const AboutImageWrapperCSS = css({
  flex: '1 1 48%',
  minWidth: '320px',
  borderRadius: '24px',
  overflow: 'hidden',
  position: 'relative',
  border: '1px solid rgba(19, 213, 255, 0.18)',
  background: 'linear-gradient(180deg, rgba(7, 16, 35, 0.95), rgba(20, 35, 65, 0.9))',
  boxShadow: '0 0 0 1px rgba(19, 213, 255, 0.08)',
  '@media(max-width: 980px)': {
    width: '100%',
    minWidth: '0'
  },
  '@media(max-width: 640px)': {
    minWidth: '0'
  }
})

export const AboutImageCSS = css({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  aspectRatio: '4 / 3'
})

export const AboutImageCaptionCSS = css({
  position: 'absolute',
  left: '18px',
  right: '18px',
  bottom: '18px',
  padding: '14px 16px',
  borderRadius: '18px',
  background: 'rgba(0, 0, 0, 0.6)',
  color: '#d5f6ff',
  fontSize: '{fontSizes.sm}',
  lineHeight: '1.5',
  boxShadow: '0 18px 40px rgba(0, 0, 0, 0.22)',
  '@media(max-width: 640px)': {
    fontSize: '{fontSizes.xs}',
    padding: '10px 12px'
  }
})

export const AboutTextCSS = css({
  flex: '1 1 52%',
  display: 'grid',
  gap: '18px',
  minWidth: '260px',
  '@media(max-width: 980px)': {
    minWidth: '100%'
  },
  '@media(max-width: 640px)': {
    gap: '14px'
  }
})

export const AboutLabelCSS = css({
  fontSize: '{fontSizes.sm}',
  fontWeight: 700,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: '#70d4ff',
  opacity: 0.94,
  '@media(max-width: 640px)': {
    fontSize: '{fontSizes.xs}'
  }
})

export const AboutCardTitleCSS = css({
  fontSize: '{fontSizes.3xl}',
  fontFamily: 'athena',
  letterSpacing: '-0.03em',
  lineHeight: '1.05',
  '@media(max-width: 768px)': {
    fontSize: '{fontSizes.2xl}'
  },
  '@media(max-width: 640px)': {
    fontSize: '{fontSizes.xl}'
  },
  '@media(max-width: 480px)': {
    fontSize: '{fontSizes.lg}'
  }
})

export const AboutDescriptionCSS = css({
  fontSize: '{fontSizes.lg}',
  lineHeight: '1.95',
  color: '#d9ebff',
  maxWidth: '100%',
  '@media(max-width: 768px)': {
    fontSize: '{fontSizes.base}',
    lineHeight: '1.8'
  },
  '@media(max-width: 640px)': {
    fontSize: '{fontSizes.sm}'
  },
  '@media(max-width: 480px)': {
    fontSize: '{fontSizes.xs}',
    lineHeight: '1.7'
  }
})

export const AboutHeadingCSS = css({
  fontSize: '72px',
  fontFamily: 'athena',
  letterSpacing: '-0.045em',
  lineHeight: '1.15',
  fontWeight: 600,
  display: 'flex',
  gap: '8px',
  '@media(max-width: 980px)': {
    fontSize: '52px'
  },
  '@media(max-width: 640px)': {
    fontSize: '42px'
  },
  '@media(max-width: 480px)': {
    fontSize: '34px'
  }
})

export const AboutLetterCSS = css({
  display: 'inline-block',
  animation: 'starWaterfall 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
  transformOrigin: 'center'
})
