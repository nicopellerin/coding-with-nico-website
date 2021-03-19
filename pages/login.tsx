import * as React from 'react'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaRocket } from 'react-icons/fa'
import Wave from '../components/Wave'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [formError, setFormError] = useState('')

  const inputRef = useRef<HTMLInputElement | null>(null)

  let errorSound: HTMLAudioElement

  if (typeof Audio !== 'undefined') {
    errorSound = new Audio('/sounds/error-smooth.mp3')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    try {
      throw new Error('Todo')
    } catch (error) {
      errorSound.play()
      setFormError('Please enter a valid email')
    }
  }

  return (
    <Wrapper>
      <Container
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: '-3rem' }}
        transition={{ type: 'spring', damping: 18 }}
      >
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 18 }}
        >
          Welcome back!
        </Title>
        <FormStyled
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 18 }}
          onSubmit={handleSubmit}
        >
          <Input
            ref={inputRef}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Your email"
            required
            onFocus={() => setFormError('')}
          />
          <Button whileTap={{ scale: 0.98 }}>
            <span>Log in</span> <FaRocket style={{ marginLeft: 7 }} />
          </Button>
          {formError && (
            <ErrMsg initial={{ x: '-50%', y: 10 }} animate={{ y: 0 }}>
              {formError}
            </ErrMsg>
          )}
        </FormStyled>
        <Note
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', damping: 80, delay: 0.5 }}
        >
          At the moment, please use a desktop Chromium-based browser for the
          best experience
        </Note>
      </Container>
      <Wave />
    </Wrapper>
  )
}

export default LoginPage

// Styles
const Wrapper = styled.div`
  background: url('/images/gradient1.png');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: hsl(257 58% 10% / 0.3);
  padding: 6rem 4rem;
  border-radius: 10px;
  border: 1px solid hsl(257 58% 80% / 0.1);
  border-bottom: 7px solid var(--primaryColor);
  min-width: 42rem;
  box-shadow: 0 0.4rem 5rem rgba(131, 82, 253, 0.1);

  @media (max-width: 500px) {
    width: 90vw;
    margin: 0 auto;
    filter: none;
    padding: 4rem 2rem;
  }
`

const Title = styled(motion.h3)`
  margin: 0 0 4rem 0;
  font-size: 4.2rem;
  color: var(--tertiaryColor);
  text-align: center;

  @media (min-width: 600px) {
    font-size: 5rem;
  }
`

const FormStyled = styled(motion.form)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6em;
  align-items: center;
  background: linear-gradient(-45deg, #1a0d2b 50%, #4d2f72);
  padding: 1.7rem;
  border-radius: 5px;
  position: relative;
  width: 100%;

  @media (min-width: 600px) {
    grid-template-columns: 1fr auto;
    gap: 0;
  }
`

const Input = styled.input`
  border: none;
  background: #0c0613;
  color: var(--textColor);
  padding: 0.8em 1em;
  font-size: 2rem;
  border-radius: 5px;
  width: 100%;
  min-width: 20rem;
  margin-right: 1rem;
  outline: transparent;

  @media (min-width: 600px) {
    min-width: 30rem;
  }
`

const Button = styled(motion.button)`
  padding: 0.8em 1em;
  border: none;
  background: linear-gradient(
    140deg,
    var(--primaryColor),
    var(--primaryColorDark)
  );
  color: var(--tertiaryColor);
  font-size: 2rem;
  font-weight: 600;
  height: 5.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: transparent;
  white-space: nowrap;
  will-change: transform;
`

const Note = styled(motion.span)`
  display: block;
  font-size: 1.7rem;
  width: 40ch;
  text-align: center;
  margin-top: 4rem;
  line-height: 1.4;

  @media (max-width: 500px) {
    width: 80vw;
    margin: 4rem auto 0;
  }
`

const ErrMsg = styled(motion.span)`
  position: absolute;
  bottom: -2.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  left: 50%;
  color: crimson;
`
