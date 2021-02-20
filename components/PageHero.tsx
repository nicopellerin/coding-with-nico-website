import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Background from './Background'

interface Props {
  title?: string
  img?: string
  bgColor?: string
}

const PageHero: React.FC<Props> = ({
  title = 'Some page',
  img = '/images/rocket.png',
  bgColor = '#001',
}) => {
  const constraintsRef = React.useRef(null)

  return (
    <Wrapper ref={constraintsRef}>
      <Background bgColor={bgColor} />
      <Title
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 18, stiffness: 70 }}
      >
        {title}
      </Title>
      <CloudOne
        drag
        dragConstraints={constraintsRef}
        src="/images/cloud1.png"
        alt="Cloud 1"
        style={{}}
        animate={{ y: [5, 0, 5] }}
        transition={{
          type: 'tween',
          duration: 4,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 0.2,
        }}
      />
      <CloudTwo
        drag
        dragConstraints={constraintsRef}
        src="/images/cloud2.png"
        alt="Cloud 2"
        animate={{ y: [5, 0, 5] }}
        transition={{
          type: 'tween',
          duration: 5,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 0.4,
        }}
      />
      <CloudThree
        drag
        dragConstraints={constraintsRef}
        src="/images/cloud3.png"
        alt="Cloud 3"
        animate={{ y: [5, 0, 5] }}
        transition={{
          type: 'tween',
          duration: 4,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 0.3,
        }}
      />
      <HeroImage
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        src={img}
        alt="rocket"
        animate={{ y: [7, 0, 7], x: [2, 0, 2] }}
        transition={{
          type: 'tween',
          duration: 7,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 0.4,
        }}
      />
      <Wave
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin slice"
        viewBox="0 0 1200 129"
      >
        <path
          width="100%"
          d="M 0 64 L 48 48 C 96 32 192 0 288 0 C 384 0 480 32 576 58.7 C 672 85 768 107 864 85.3 C 960 64 1056 0 1152 0 C 1248 0 1344 64 1392 96 L 1440 128 L 1440 192 L 0 192 Z"
          fill="#001"
        ></path>
      </Wave>
    </Wrapper>
  )
}

export default PageHero

// Styles
const Wrapper = styled.div`
  height: 36vh;
  background: linear-gradient(45deg);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    height: 47vh;
  }

  @media (min-width: 769px) {
    height: 48vh;
  }

  @media (min-width: 1369px) {
    height: 50vh;
  }

  @media (min-width: 1800px) {
    height: 48vh;
  }
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

  @media (max-width: 375px) {
    margin-bottom: -0.5rem;
    font-size: 3.2rem;
  }

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

const Wave = styled(motion.svg)`
  position: absolute;
  width: 100vw;
  bottom: -1px;
  left: 0;
  filter: drop-shadow(-1px -2px 1px rgba(155, 81, 224, 0.5));
  pointer-events: none;
`

const HeroImage = styled(motion.img)`
  position: absolute;
  cursor: grab;
  max-width: 22rem;
  top: 27vh;
  right: 5vw;

  @media (min-width: 600px) {
    top: 18rem;
    max-width: 28rem;
  }

  @media (min-width: 768px) {
    max-width: 40rem;
    top: 32rem;
    right: 10vw;
  }

  @media (min-width: 1024px) {
    max-width: 34rem;
    top: 16rem;
    right: 14vw;
  }

  @media (min-width: 1440px) {
    max-width: 35rem;
    top: 15rem;
    right: 20vw;
  }

  @media (min-width: 1600px) {
    max-width: 40rem;
    top: 10rem;
    right: 22vw;
  }
`

const CloudOne = styled(motion.img)`
  position: absolute;
  cursor: grab;
  max-width: 4rem;
  left: 9vw;
  top: 15rem;
  display: none;

  @media (min-width: 768px) {
    display: block;
    max-width: 5rem;
    top: 18rem;
    left: 20vw;
  }

  @media (min-width: 1024px) {
    max-width: 5rem;
    top: 15rem;
    left: 18vw;
  }

  @media (min-width: 1440px) {
    max-width: 5rem;
    top: 15rem;
    left: 26vw;
  }
`

const CloudTwo = styled(motion.img)`
  position: absolute;
  cursor: grab;
  max-width: 6rem;
  left: 45vw;
  top: 10rem;
  display: none;

  @media (min-width: 768px) {
    display: block;
    max-width: 7rem;
    top: 10rem;
    left: 40vw;
  }

  @media (min-width: 1024px) {
    max-width: 7rem;
    top: 8rem;
    left: 30vw;
  }

  @media (min-width: 1440px) {
    max-width: 7rem;
    top: 5rem;
    left: 36vw;
  }
`

const CloudThree = styled(motion.img)`
  position: absolute;
  cursor: grab;
  max-width: 6rem;
  right: 5vw;
  top: 16rem;
  z-index: 2;
  display: none;

  @media (min-width: 768px) {
    display: block;
    max-width: 7rem;
    top: 16rem;
    right: 22vw;
  }

  @media (min-width: 1024px) {
    max-width: 7rem;
    top: 12rem;
    right: 32vw;
  }

  @media (min-width: 1440px) {
    max-width: 7rem;
    top: 11rem;
    right: 34vw;
  }

  @media (min-width: 1800px) {
    max-width: 7rem;
    top: 11rem;
    right: 36vw;
  }
`
