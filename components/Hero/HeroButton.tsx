import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { FaCode } from 'react-icons/fa'
import Link from 'next/link'

import { audioOnState } from '../../store/audio'

const HeroButton = () => {
  const audioOn = useRecoilValue(audioOnState)

  let clickSound: HTMLAudioElement

  if (typeof Audio !== 'undefined') {
    clickSound = new Audio('/sounds/click_snip.mp3')
  }

  const playSound = () => audioOn && clickSound.play()

  return (
    <Link href="/tips-tricks">
      <a>
        <Button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={playSound}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 18 }}
        >
          Start learning <FaCode style={{ marginLeft: 7, marginTop: 2 }} />
        </Button>
      </a>
    </Link>
  )
}

export default HeroButton

// Styles
const Button = styled(motion.button)`
  border: none;
  padding: 0.7em 1.2em;
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
  width: 100%;
  justify-content: center;
  height: 48px;

  @media (min-width: 768px) {
    font-size: 2.2rem;
    width: auto;
    height: 58px;
  }

  @media (min-width: 2200px) {
    font-size: 2.4rem;
  }
`
