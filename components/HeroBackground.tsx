import React, { Dispatch, SetStateAction, FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'

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
            <img src="images/blob.svg" style={{ position: 'absolute' }} />
          </Info>
          <img src="/images/character.png" style={{ maxWidth: '98%' }} />
        </Container>
        <img
          src="/images/wave.svg"
          style={{ position: 'absolute', bottom: 0 }}
        />
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
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 160rem;
`

const Info = styled(motion.div)`
  padding: 0 2rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: -10rem;
  position: relative;
  /* position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; */

  /* @media (max-width: 330px) {
    top: 45%;
  }

  @media (min-width: 768px) {
    top: 48%;
  }

  @media (min-width: 1024px) {
    padding: 0;
    top: 46%;
  }

  @media (min-width: 1366px) {
    padding: 0;
    top: 40%;
  } */
`

const Title = styled(motion.h1)`
  font-size: 6.2rem;
  /* background: -webkit-linear-gradient(45deg, #e39aff 1%, #f4d7ff 123.31%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; */
  color: #f4d7ff;
  margin-bottom: 2.6rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  line-height: 1.05;

  @media (max-width: 330px) {
    font-size: 5.2rem;
    margin-bottom: 2.6rem;
  }

  @media (max-height: 667px) {
    font-size: 5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 7.2rem;
    margin-bottom: 3.2rem;
  }

  @media (min-width: 1366px) {
    font-size: 9rem;
  }
`

const Tagline = styled(motion.h2)`
  font-size: 2.4rem;
  /* background: -webkit-linear-gradient(45deg, #f1f1f1 1%, #f6deff 123.31%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; */
  color: #f1f1f1;
  font-weight: 500;
  letter-spacing: 1.1px;
  margin-bottom: 2.6rem;
  font-family: 'Inter';
  line-height: 1.4;
  max-width: 35ch;

  strong {
    color: #9b51e0;
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
