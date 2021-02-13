import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Background from './Background'

interface Props {
  title?: string
  bgImage?: string
  bgGradientOne?: string
  bgGradientTwo?: string
}

const PageHero: React.FC<Props> = ({ title = 'Some page' }) => {
  const constraintsRef = React.useRef(null)

  return (
    <Wrapper ref={constraintsRef}>
      <Background />
      <Title
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 18, stiffness: 70 }}
      >
        {title}
      </Title>
      <motion.img
        drag
        dragConstraints={constraintsRef}
        src="/images/cloud1.png"
        alt="rocket"
        style={{
          maxWidth: '5rem',
          position: 'absolute',
          top: '15rem',
          left: '26vw',
          cursor: 'grab',
        }}
        animate={{ y: [5, 0, 5] }}
        transition={{
          type: 'tween',
          duration: 4,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 0.2,
        }}
      />
      <motion.img
        drag
        dragConstraints={constraintsRef}
        src="/images/cloud2.png"
        alt="rocket"
        style={{
          maxWidth: '7rem',
          position: 'absolute',
          top: '5rem',
          left: '36vw',
          cursor: 'grab',
        }}
        animate={{ y: [5, 0, 5] }}
        transition={{
          type: 'tween',
          duration: 5,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 0.4,
        }}
      />
      <motion.img
        drag
        dragConstraints={constraintsRef}
        src="/images/cloud3.png"
        alt="rocket"
        style={{
          maxWidth: '7rem',
          position: 'absolute',
          top: '11rem',
          right: '36vw',
          cursor: 'grab',
          zIndex: 2,
        }}
        animate={{ y: [5, 0, 5] }}
        transition={{
          type: 'tween',
          duration: 4,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 0.3,
        }}
      />
      <motion.img
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        src="/images/rocket.png"
        alt="rocket"
        style={{
          maxWidth: '40rem',
          position: 'absolute',
          top: '10rem',
          right: '22vw',
          cursor: 'grab',
        }}
        animate={{ y: [7, 0, 7], x: [2, 0, 2] }}
        transition={{
          type: 'tween',
          duration: 7,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 0.4,
        }}
      />
    </Wrapper>
  )
}

export default PageHero

// Styles
const Wrapper = styled.div`
  height: 48vh;
  background: linear-gradient(45deg);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled(motion.h1)`
  font-size: 4rem;
  background: linear-gradient(
    45deg,
    rgba(155, 81, 224, 0.6),
    rgba(61, 40, 195, 0.7)
  );
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: 3px solid rgba(255, 255, 255, 0.1);
  color: #f4d7ff;
  position: relative;
  line-height: 1;
  font-family: 'Space Grotesk', sans-serif;

  &::after {
    content: '';
    width: 100%;
    height: 0.5rem;
    background: rgba(255, 255, 255, 0.125);
    position: absolute;
    left: 0;
    bottom: -3px;
  }
`
