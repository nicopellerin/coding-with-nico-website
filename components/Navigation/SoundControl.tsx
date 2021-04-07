import * as React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'
import { useRecoilState } from 'recoil'
import { motion } from 'framer-motion'

import useLocalStorage from '../../hooks/useLocalStorage'

import { audioOnState } from '../../store/audio'
import { useMedia } from 'react-use-media'

const SoundControl = () => {
  const [audioOn, setAudioOn] = useRecoilState(audioOnState)

  const [storage, setStorage] = useLocalStorage('audioOnState', audioOn)

  const isMobile = useMedia({ maxWidth: 768 })

  useEffect(() => {
    setAudioOn(storage)
  }, [storage])

  useEffect(() => {
    if (isMobile) {
      setAudioOn(false)
    }
  }, [isMobile])

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
  margin-left: 40px;
  color: #bb6bd9;
  cursor: pointer;
  margin-top: 4px;
`

const VolumeOffIcon = styled(FiVolumeX)`
  font-size: 2rem;
  margin-left: 40px;
  color: #bb6bd9;
  cursor: pointer;
  margin-top: 4px;
`
