import * as React from 'react'
import { useState, useEffect, memo } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useRecoilValue } from 'recoil'

import { audioOnState } from '../store/audio'
import AboutBackground from './AboutBackground'

const Me = () => {
  const [flip, setFlip] = useState(false)

  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      skewY: [-5, 2],
    })
    return () => controls.stop()
  }, [])

  const audioOn = useRecoilValue(audioOnState)

  let spinSound: HTMLAudioElement

  if (typeof Audio !== 'undefined') {
    spinSound = new Audio('/sounds/laugh.wav')
    spinSound.volume = 0.4
  }

  const playSound = () => audioOn && spinSound.play()

  return (
    <div style={{ position: 'relative' }}>
      <picture
        onMouseOver={() => setFlip(true)}
        onMouseOut={() => setFlip(false)}
      >
        <source
          srcSet={flip ? '/images/me2.webp' : '/images/me.webp'}
          type="image/webp"
        />
        <MeImg
          src={flip ? '/images/me2.jpg' : '/images/me.jpg'}
          alt="Nico Pellerin"
          animate={controls}
          whileTap={{ scale: 1.2, rotate: 360 }}
          onClick={playSound}
        />
      </picture>
      <AboutBackground />
    </div>
  )
}

export default memo(Me)

// Styles
const MeImg = styled(motion.img)`
  max-width: 47%;
  border-radius: 50%;
  border: 5px solid #f4f4f4;
  margin: 0 auto;
  margin-bottom: 3rem;
  position: relative;
  z-index: 200;
  cursor: pointer;
  overflow: hidden;

  @media (min-width: 768px) {
    margin-bottom: 0rem;
    max-width: 90%;
  }
`
