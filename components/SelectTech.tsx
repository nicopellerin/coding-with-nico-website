import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

const techImages = [
  { tech: 'React', logo: '/images/tech/react.png' },
  { tech: 'Typescript', logo: '/images/tech/typescript.png' },
  { tech: 'Graphql', logo: '/images/tech/graphql.png' },
  { tech: 'Javascript', logo: '/images/tech/javascript.png' },
  { tech: 'Rust', logo: '/images/tech/rustlang.png' },
]

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      type: 'spring',
      damping: 18,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 30 },
}

const SelectTech = () => {
  const [index, setIndex] = useState<number | null>(null)
  const [perc, setPerc] = useState(0)
  const [showTech, setShowTech] = useState(false)
  const [minimizeTerminal, setMinimizeTerminal] = useState(false)

  // Saves seenLoadingTech to localStorage
  let hasSeen: boolean
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return
    }
    const storage = localStorage.getItem('seenLoadingTech')
    hasSeen = storage ? !!JSON.parse(storage) : false
    if (!hasSeen) {
      localStorage.setItem('seenLoadingTech', JSON.stringify(true))
    }
  }, [])

  //   If hasSeen is true, return early. Else, start loading db count to 100%
  useEffect(() => {
    if (hasSeen) {
      setShowTech(true)
      return
    }
    const inter = window.setInterval(
      () => setPerc((prevState) => (prevState <= 99 ? prevState + 1 : 100)),
      10
    )
    const idx = window.setTimeout(() => {
      setShowTech(true)
      window.clearInterval(inter)
    }, 1500)

    return () => {
      window.clearTimeout(idx)
      window.clearInterval(inter)
    }
  }, [])

  //   let laughSound: HTMLAudioElement
  //   if (typeof Audio !== 'undefined') {
  //     laughSound = new Audio('/sounds/wiz.mp3')
  //     laughSound.volume = 0.3
  //   }

  return (
    <Wrapper>
      <Container>
        <Terminal
          initial={{ y: 100 }}
          animate={{ y: minimizeTerminal ? 375 : 0 }}
          transition={{ type: 'spring', damping: 16 }}
        >
          <TerminalImage src="/images/terminal.png" alt="Terminal" />
          <button
            onClick={() => {
              setMinimizeTerminal(true)
            }}
            style={{
              position: 'absolute',
              top: 15,
              left: 55,
              opacity: 0,
              cursor: 'pointer',
            }}
          >
            X
          </button>
          <button
            onClick={() => setMinimizeTerminal(false)}
            style={{
              position: 'absolute',
              top: 15,
              left: 75,
              opacity: 0,
              cursor: 'pointer',
            }}
          >
            X
          </button>
          <AnimatePresence>
            {showTech ? (
              <>
                <Title
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', damping: 6 }}
                >
                  Pick a technology
                  <motion.span
                    animate={{ opacity: [0, 1] }}
                    transition={{ yoyo: Infinity }}
                    style={{
                      display: 'inline-block',
                      fontSize: '3.4rem',
                      lineHeight: 1,
                      marginLeft: 4,
                    }}
                  >
                    &#9646;
                  </motion.span>
                </Title>
                <Grid
                  variants={list}
                  initial="hidden"
                  animate="visible"
                  style={{ border: '2px solid rgba(144, 238, 144, 0.1)' }}
                >
                  <AnimatePresence>
                    {techImages.map(({ tech, logo }, i) => (
                      <Tech
                        key={tech}
                        onMouseOver={() => setIndex(i)}
                        onMouseOut={() => setIndex(null)}
                        variants={item}
                      >
                        <Link href={`/tips-tricks/${tech.toLowerCase()}`}>
                          <a>
                            <TechImage
                              layoutId={tech.toLowerCase()}
                              src={logo}
                              alt={tech}
                              transition={{ type: 'tween', duration: 0.2 }}
                            />
                            {index === i && (
                              <Name
                                initial={{ x: '-50%', opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                              >
                                {tech}
                              </Name>
                            )}
                          </a>
                        </Link>
                      </Tech>
                    ))}
                  </AnimatePresence>
                </Grid>
              </>
            ) : (
              <LoadingWrapper>
                <LoadingText initial={{ y: 10 }} animate={{ y: 0 }}>
                  Loading from database... {perc}%
                  <motion.span
                    animate={{ opacity: [0, 1] }}
                    transition={{ yoyo: Infinity }}
                    style={{
                      display: 'inline-block',
                      fontSize: '3.5rem',
                      lineHeight: 0.7,
                      marginLeft: 2,
                    }}
                  >
                    &#9646;
                  </motion.span>
                </LoadingText>
              </LoadingWrapper>
            )}
          </AnimatePresence>
        </Terminal>
        <PhpJoke
          src="/images/php.jpg"
          alt="php"
          style={{
            position: 'absolute',
            top: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '25rem',
            zIndex: -1,
            opacity: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </Container>
    </Wrapper>
  )
}

export default SelectTech

// Styles
const Wrapper = styled.div`
  height: 100%;
  position: relative;
  z-index: 2;
`

const Container = styled.div`
  width: 100%;
  height: 48rem;
  overflow: hidden;

  &::after {
    content: '';
    width: 120%;
    height: 5px;
    background: rgba(131, 82, 253, 0.1);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    filter: drop-shadow(0 0.05rem 2rem rgba(131, 82, 253, 0.5));

    @media (max-width: 500px) {
      display: none;
    }
  }
`

const Title = styled(motion.pre)`
  font-size: 3rem;
  line-height: 1;
  color: lightgreen;
  margin-top: 0;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
`

const Grid = styled(motion.div)`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, minmax(4rem, auto));
  gap: 3rem;
  border: 3px solid rgba(102, 51, 153, 0.1);
  padding: 5rem 4rem;
  border-radius: 0.5rem;
  position: relative;
  z-index: 3;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, auto);
    gap: 6rem;
  }
`

const Tech = styled(motion.div)`
  position: relative;
  cursor: pointer;
`

const Name = styled(motion.span)`
  position: absolute;
  left: 50%;
  bottom: -3rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #f4d7ff;

  @media (max-width: 500px) {
    display: none;
  }
`

const LoadingWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  height: 34rem;
`

const LoadingText = styled(motion.pre)`
  color: lightgreen;
  display: flex;
  font-size: 3rem;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`

const TechImage = styled(motion.img)`
  width: 6rem;
  border-radius: 10%;

  @media (min-width: 768px) {
    width: 8rem;
  }
`

const Terminal = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
`

const TerminalImage = styled(motion.img)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  filter: drop-shadow(0 0.05rem 2rem rgba(131, 82, 253, 0.05));

  @media (max-width: 500px) {
    height: 80rem;
    object-fit: cover;
  }
`

const PhpJoke = styled(motion.img)`
  display: block;

  @media (max-width: 500px) {
    display: none;
  }
`
