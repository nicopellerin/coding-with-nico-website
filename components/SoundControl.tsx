import * as React from 'react'
import styled from 'styled-components'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'
import { useRecoilState } from 'recoil'

import { audioOnState } from '../store/audio'

const SoundControl = () => {
  const [audioOn, setAudioOn] = useRecoilState(audioOnState)

  let tocSound: HTMLAudioElement

  if (typeof Audio !== 'undefined') {
    tocSound = new Audio('/sounds/tic-click.mp3')
    tocSound.volume = 0.5
  }

  return (
    <>
      {audioOn ? (
        <VolumeOnIcon onClick={() => setAudioOn(false)} />
      ) : (
        <VolumeOffIcon
          onClick={() => {
            setAudioOn(true)
            tocSound.play()
          }}
        />
      )}
    </>
  )
}

export default React.memo(SoundControl)

// Styles
const VolumeOnIcon = styled(FiVolume2)`
  font-size: 2rem;
  margin-left: 3rem;
  color: #bb6bd9;
  cursor: pointer;
`

const VolumeOffIcon = styled(FiVolumeX)`
  font-size: 2rem;
  margin-left: 3rem;
  color: #bb6bd9;
  cursor: pointer;
`
