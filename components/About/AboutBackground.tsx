import * as React from 'react'
import { memo } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const AboutBackground = () => {
  return (
    <>
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
    </>
  )
}

export default memo(AboutBackground)

// Styles
const Blob = styled(motion.img)`
  position: absolute;
  width: 40rem;
  top: 0;
  left: 0;

  @media (max-width: 500px) {
    top: -4rem;
    width: 37rem;
  }

  @media (max-width: 400px) {
    top: -5rem;
    width: 36rem;
  }

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

  @media (max-width: 500px) {
    top: -1rem;
    width: 19rem;
  }

  @media (max-width: 400px) {
    top: -1rem;
    width: 17rem;
  }

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
