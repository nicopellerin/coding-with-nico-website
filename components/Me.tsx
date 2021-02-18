import * as React from 'react'
import { useState, useEffect, memo } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useRecoilValue } from 'recoil'

import { audioOnState } from '../store/audio'

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
      <Blob
        src="images/blob.svg"
        animate={{ rotate: [0, 5, 0], scale: [0.98, 1.03, 0.98] }}
        transition={{
          type: 'tween',
          duration: 7,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <Triangle
        src="images/Triangle.png"
        transition={{
          type: 'tween',
          duration: 7,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{ rotate: -10, skewY: 2 }}
      />
    </div>
  )
}

export default memo(Me)

// Styles
const MeImg = styled(motion.img)`
  max-width: 80%;
  border-radius: 50%;
  border: 5px solid #f4f4f4;
  margin: 0 auto;
  margin-bottom: 3rem;
  position: relative;
  z-index: 200;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-bottom: 0rem;
    max-width: 90%;
  }
`

const Blob = styled(motion.img)`
  position: absolute;
  width: 40rem;
  top: 0;
  left: 0;

  @media (min-width: 768px) {
    top: -60%;
    left: -50%;
    width: 65rem;
  }

  @media (min-width: 1025px) {
    top: -80%;
    left: -70%;
    width: 75rem;
  }
`

const Triangle = styled(motion.img)`
  position: absolute;
  width: 25rem;
  top: 0;
  left: 0;

  @media (min-width: 768px) {
    top: -15%;
    left: -10%;
    width: 30rem;
    opacity: 0.4;
  }

  @media (min-width: 1025px) {
    top: -15%;
    left: -30%;
    width: 32rem;
    opacity: 0.4;
  }
`
