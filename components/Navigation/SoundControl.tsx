import * as React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'
import { useRecoilState } from 'recoil'

import { audioOnState } from '../../store/audio'
import { motion } from 'framer-motion'
import useLocalStorage from '../../hooks/useLocalStorage'

const SoundControl = () => {
  const [audioOn, setAudioOn] = useRecoilState(audioOnState)

  const [storage, setStorage] = useLocalStorage('audioOnState', audioOn)

  useEffect(() => {
    setAudioOn(storage)
  }, [storage])

  let tocSound: HTMLAudioElement

  if (typeof Audio !== 'undefined') {
    tocSound = new Audio('/sounds/tic-click.mp3')
    tocSound.volume = 0.5
  }

  return (
    <>
      {storage ? (
        <motion.span whileTap={{ scale: 0.98, height: '2rem' }}>
          <VolumeOnIcon onClick={() => setStorage(false)} />
        </motion.span>
      ) : (
        <motion.span whileTap={{ scale: 0.98, height: '2rem' }}>
          <VolumeOffIcon
            onClick={() => {
              setStorage(true)
              tocSound.play()
            }}
          />
        </motion.span>
      )}
    </>
  )
}

export default React.memo(SoundControl)

// Styles
const VolumeOnIcon = styled(FiVolume2)`
  font-size: 2rem;
  margin-left: 3.6rem;
  color: #bb6bd9;
  cursor: pointer;
`

const VolumeOffIcon = styled(FiVolumeX)`
  font-size: 2rem;
  margin-left: 3.6rem;
  color: #bb6bd9;
  cursor: pointer;
`
