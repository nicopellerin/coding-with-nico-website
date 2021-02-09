import React, { Dispatch, SetStateAction, FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'
import Wave from './Wave'

// import dynamic from 'next/dynamic'

// const DropdownMobile = dynamic(() => import('./DropdownMobile'), { ssr: false })

interface Props {
  toggleDropdown: boolean
  setToggleDropdown: Dispatch<SetStateAction<boolean>>
}

const HeroBackground: FC<Props> = ({ toggleDropdown, setToggleDropdown }) => {
  console.log(toggleDropdown, setToggleDropdown)
  return (
    <>
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
              Hi! I’m Nico Pellerin, a <strong>software developer</strong> from
              Montreal, Canada. My goal is to help you learn new{' '}
              <strong>life changing</strong> coding skills{' '}
              <span style={{ color: 'unset' }}>&#128640;</span>
            </Tagline>
            <Button whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
              Start learning <FaCode style={{ marginLeft: 7, marginTop: 2 }} />
            </Button>
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
          </Info>
          <Character src="/images/character.png" alt="Character" />
        </Container>
        <Wave />
      </Wrapper>
      {/* <AnimatePresence>
        {toggleDropdown && (
          <DropdownMobile setToggleDropdown={setToggleDropdown} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {toggleDropdown && <Overlay setToggleDropdown={setToggleDropdown} />}
      </AnimatePresence> */}
    </>
  )
}

export default HeroBackground

// Styles
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: url('/images/back.png');
  background-size: cover;
  background-position-y: center;

  @media (min-width: 768px) {
    background: url('/images/back.png');
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

  @media (min-width: 768px) {
    margin-top: -5rem;
  }

  @media (min-width: 1367px) {
    grid-template-columns: 1fr 1fr;
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

  @media (min-width: 768px) {
    top: -5rem;
    left: -10rem;
  }

  @media (min-width: 1024px) {
    top: 0rem;
    left: -20rem;
  }

  @media (min-width: 1366px) {
    top: -2rem;
    left: -30rem;
  }

  @media (min-width: 1400px) {
    position: static;
  }
`

const Title = styled(motion.h1)`
  font-size: 6.2rem;
  color: #f4d7ff;
  margin-bottom: 2.6rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  line-height: 1.05;
  max-width: 13ch;

  @media (max-width: 330px) {
    font-size: 5.2rem;
    margin-bottom: 2.6rem;
  }

  @media (max-height: 667px) {
    font-size: 5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 8rem;
    margin-bottom: 3.2rem;
  }

  @media (min-width: 1366px) {
    font-size: 9rem;
  }
`

const Tagline = styled(motion.h2)`
  font-size: 2.4rem;
  color: #f1f1f1;
  font-weight: 500;
  letter-spacing: 1.1px;
  margin-bottom: 2.6rem;
  font-family: 'Inter';
  line-height: 1.4;
  max-width: 37ch;

  strong {
    background: -webkit-linear-gradient(45deg, #f6deff 1%, #9b51e0 123.31%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 330px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-height: 667px) {
    font-size: 1.9rem;
    margin-bottom: 2rem;
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

  @media (max-width: 330px) {
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media (min-width: 1366px) {
    /* font-size: 2.4rem; */
  }
`

const Character = styled.img`
  max-width: 98%;

  @media (min-width: 768px) {
    position: absolute;
    width: 80rem;
    right: 0rem;
    bottom: 8rem;
  }

  @media (min-width: 1024px) {
    position: absolute;
    width: 60rem;
    right: 0rem;
    bottom: 8rem;
  }

  @media (min-width: 1366px) {
    position: absolute;
    width: 80rem;
    right: 0rem;
    bottom: 10rem;
  }

  @media (min-width: 1500px) {
    position: relative;
    bottom: 0;
  }
`

const Blob = styled(motion.img)`
  max-width: 100%;
`
