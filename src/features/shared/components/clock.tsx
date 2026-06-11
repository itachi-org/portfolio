import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { css } from '~styled-system/css'

const clockStyles = css({
  fontVariantNumeric: 'tabular-nums',
  display: 'flex',
  gap: '0.15em',
  alignItems: 'baseline',
  fontSize: 'inherit'
})

const digitStyles = css({
  display: 'inline-block',
  minWidth: '0.6em',
  textAlign: 'center'
})

const separatorStyles = css({
  opacity: '0.6'
})

const timezoneStyles = css({
  fontSize: '0.75em',
  opacity: '0.7',
  marginLeft: '0.5em',
  fontWeight: 'normal'
})

export function Clock({ colors }: { colors: string[] }) {
  if (!colors) return;
  const [gmtOffset, setGmtOffset] = useState<string>('GMT+0')

  const colorStyles = useMemo(
    () => ({
      hours: colors[0],
      minutes: colors[1],
      seconds: colors[2]
    }),
    [colors]
  )

  const [time, setTime] = useState(() => {
    const now = new Date()
    return {
      hours: now.getHours().toString().padStart(2, '0'),
      minutes: now.getMinutes().toString().padStart(2, '0'),
      seconds: now.getSeconds().toString().padStart(2, '0')
    }
  })

  useEffect(() => {
    const now = new Date()
    const offsetMinutes = -now.getTimezoneOffset()
    const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60)
    const offsetMins = Math.abs(offsetMinutes) % 60
    const sign = offsetMinutes >= 0 ? '+' : '-'
    const formattedOffset = `GMT${sign}${offsetHours}${offsetMins > 0 ? `:${offsetMins.toString().padStart(2, '0')}` : ''}`
    setGmtOffset(formattedOffset)
  }, [])

  const intervalRef = useRef<number | null>(null)

  const updateTime = useCallback(() => {
    const now = new Date()
    setTime({
      hours: now.getHours().toString().padStart(2, '0'),
      minutes: now.getMinutes().toString().padStart(2, '0'),
      seconds: now.getSeconds().toString().padStart(2, '0')
    })
  }, [])

  useEffect(() => {
    updateTime()

    const now = new Date()
    const msUntilNextSecond = 1000 - now.getMilliseconds()

    const timeoutId: number = window.setTimeout(() => {
      updateTime()
      intervalRef.current = window.setInterval(updateTime, 1000)
    }, msUntilNextSecond)

    return () => {
      window.clearTimeout(timeoutId)
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [updateTime])

  const renderDigits = useCallback(
    (value: string, type: keyof typeof colorStyles) => {
      return value.split('').map((digit, i) => (
        <span
          key={`${type}-${i}`}
          className={digitStyles}
          style={{ color: colorStyles[type], fontWeight:'500' }}
        >
          {digit}
        </span>
      ))
    },
    [colorStyles]
  )

  return (
    <time className={clockStyles}>
      {renderDigits(time.hours, 'hours')}
      <span className={separatorStyles} style={{ color: colorStyles.hours }}>:</span>
      {renderDigits(time.minutes, 'minutes')}
      <span className={separatorStyles} style={{ color: colorStyles.minutes }}>:</span>
      {renderDigits(time.seconds, 'seconds')}
      <span className={timezoneStyles} style={{ color: colorStyles.seconds }}>
        {gmtOffset}
      </span>
    </time>
  )
}
