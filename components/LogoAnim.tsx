import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { audioOnState } from '../store/audio'

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
  }, [isHover])

  return (
    <div
      style={{ position: 'relative' }}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Logo
        src="/images/logo.svg"
        alt="Logo"
        onClick={() => audioOn && homeSound.play()}
      />
      <LogoCode src="/images/logo-o.svg" alt="Logo code" animate={controls} />
    </div>
  )
}

export default LogoAnim

// Styles
const Logo = styled.img`
  width: 30rem;
  pointer-events: all;

  @media (min-width: 768px) {
    width: 33rem;
  }
`

const LogoCode = styled(motion.img)`
  position: absolute;
  left: 2.1rem;
  top: 1.5rem;
  width: 3.7rem;

  @media (min-width: 768px) {
    left: 2.2rem;
    top: 1.7rem;
    width: 3.8rem;
  }

  @media (min-width: 1369px) {
    width: auto;
    left: 2.3rem;
    top: 1.8rem;
  }
`
