import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { FaCode } from 'react-icons/fa'

import { audioOnState } from '../store/audio'
import Link from 'next/link'

const HeroButton = () => {
  const audioOn = useRecoilValue(audioOnState)

  let clickSound: HTMLAudioElement

  if (typeof Audio !== 'undefined') {
    clickSound = new Audio('/sounds/click_snip.mp3')
  }

  const playSound = () => audioOn && clickSound.play()

  return (
    <Link href="/courses">
      <Button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={playSound}
      >
        Start learning <FaCode style={{ marginLeft: 7, marginTop: 2 }} />
      </Button>
    </Link>
  )
}

export default HeroButton

// Styles
const Button = styled(motion.button)`
  border: none;
  padding: 1.4rem 2.6rem;
  font-size: 2.2rem;
  border-radius: 0.5rem;
  font-weight: 700;
  background: linear-gradient(95.66deg, #61dafb 30.07%, #bb6bd9 104.98%);
  color: #333;
  cursor: pointer;
  position: relative;
  z-index: 900;
  box-shadow: 0 0 15px 3px rgba(89, 86, 213, 0.7);
  outline: none;
  font-family: 'Space Grotesk', sans-serif;
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 375px) {
    font-size: 1.8rem;
    width: 100%;
    justify-content: center;
  }

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media (min-width: 1366px) {
    /* font-size: 2.4rem; */
  }
`
