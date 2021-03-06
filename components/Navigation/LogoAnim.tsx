import * as React from 'react'
import { useState, useEffect, memo } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useRecoilValue } from 'recoil'

import { audioOnState } from '../../store/audio'

const LogoAnim = () => {
  const [isHover, setIsHover] = useState(false)

  const audioOn = useRecoilValue(audioOnState)

  const controls = useAnimation()

  let homeSound: HTMLAudioElement

  if (typeof Audio !== 'undefined') {
    homeSound = new Audio('/sounds/click_natural.mp3')
  }

  useEffect(() => {
    if (isHover) {
      controls.start({
        y: [0, -20, 10, 0],
        rotate: [0, 360],
      })
    }
  }, [isHover, controls])

  return (
    <div
      style={{ position: 'relative' }}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Logo
        src="/images/logo.png"
        alt="Logo"
        onClick={() => audioOn && homeSound.play()}
      />
      <LogoCode src="/images/logo-o.png" alt="Logo code" animate={controls} />
    </div>
  )
}

export default memo(LogoAnim)

// Styles
const Logo = styled(motion.img)`
  width: 28rem;
  pointer-events: all;

  @media (min-width: 768px) {
    width: 33rem;
  }
`

const LogoCode = styled(motion.img)`
  position: absolute;
  left: 2rem;
  top: 1.4rem;
  width: 3.2rem;

  @media (min-width: 768px) {
    left: 2.2rem;
    top: 1.7rem;
    width: 3.8rem;
  }

  @media (min-width: 1369px) {
    left: 2.3rem;
    top: 1.8rem;
  }
`
