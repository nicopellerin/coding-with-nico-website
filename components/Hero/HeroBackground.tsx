import React, { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Wave from '../Wave'
import HeroButton from './HeroButton'
import TechBar from '../TechBar'

const HeroBackground: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Info>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 18, stiffness: 60 }}
          >
            Upgrade your coding skills
          </Title>
          <Tagline
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 18,
              stiffness: 60,
              delay: 0.2,
            }}
          >
            Hi! I’m Nico Pellerin. My goal is to help you learn new{' '}
            <strong>life changing</strong> coding skills{' '}
            <span style={{ color: 'unset' }}>&#128640;</span>
          </Tagline>
          <Blob
            src="images/blob.svg"
            style={{ position: 'absolute' }}
            animate={{ rotate: [0, 5, 0], scale: [0.98, 1.03, 0.98] }}
            transition={{
              type: 'tween',
              duration: 7,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <ButtonWrapper>
            <HeroButton />
            <TechBar />
          </ButtonWrapper>
        </Info>
        <picture>
          <source srcSet="/images/character.webp" type="image/webp" />
          <Character
            src="/images/character.png"
            alt="Character"
            initial={{ opacity: 0, y: 20, skewY: -2 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 18,
              stiffness: 60,
              delay: 0.2,
            }}
          />
        </picture>
      </Container>
      <Wave />
    </Wrapper>
  )
}

export default React.memo(HeroBackground)

// Styles
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: url('/images/gradient1.jpg');
  background-size: cover;
  background-position-y: center;

  @media (min-width: 768px) {
    background-size: cover;
    background-position-y: center;
    padding: 0 4rem;
  }

  @media (min-width: 1367px) {
    padding: 0;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-top: -5rem;
  }

  @media (min-width: 900px) {
    max-width: 140rem;
  }

  @media (min-width: 1700px) {
    position: static;
    max-width: 160rem;
  }
`

const Info = styled(motion.div)`
  padding: 0 2rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  position: relative;
  top: 0;
  left: 0;

  @media (min-width: 768px) {
    top: -5rem;
  }

  @media (min-width: 1024px) {
    top: 0rem;
  }

  @media (min-width: 1366px) {
    top: -2rem;
    left: 0rem;
  }

  @media (min-width: 1400px) {
    position: static;
  }
`

const Title = styled(motion.h1)`
  font-size: 6.2rem;
  background: -webkit-linear-gradient(45deg, #f6deff 1%, #9b51e0 123.31%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2.6rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  line-height: 1.05;
  max-width: 13ch;

  @media (min-width: 768px) {
    font-size: 8rem;
    margin-bottom: 3.2rem;
  }

  @media (min-width: 1366px) {
    font-size: 8.2rem;
  }

  @media (min-width: 1600px) {
    font-size: 9.2rem;
  }

  @media (min-width: 2200px) {
    font-size: 10.2rem;
  }
`

const Tagline = styled(motion.h2)`
  font-size: 2.4rem;
  color: #f1f1f1;
  font-weight: 500;
  letter-spacing: 1.1px;
  margin-bottom: 2.6rem;
  font-family: 'Inter';
  line-height: 1.5;
  max-width: 37ch;

  strong {
    /* background: -webkit-linear-gradient(45deg, #f6deff 1%, #9b51e0 123.31%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent; */
    color: #f6deff;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 4.5rem;
  }

  @media (min-width: 1366px) {
    margin-bottom: 5rem;
  }
`

const Character = styled(motion.img)`
  position: fixed;
  width: 24rem;
  max-width: 98%;
  bottom: -10px;
  right: 95px;

  @media (min-width: 600px) {
    width: 34rem;
    right: 165px;
  }

  @media (min-width: 768px) {
    width: 70rem;
    right: 0rem;
  }

  @media (min-width: 1024px) {
    width: 62rem;
    right: 0rem;
    bottom: 6rem;
  }

  @media (min-width: 1200px) {
    width: 78rem;
    right: 5rem;
    bottom: 7rem;
  }

  @media (min-width: 1600px) {
    width: 78rem;
    right: 5rem;
  }

  @media (min-width: 1700px) {
    position: relative;
    width: 80rem;
    right: 0rem;
    bottom: -6.2rem;
  }

  @media (min-width: 2200px) {
    width: 120%;
    max-width: unset;
    bottom: -3rem;
  }

  @media (max-width: 667px) {
    display: none;
  }
`

const Blob = styled(motion.img)`
  max-width: 100%;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
