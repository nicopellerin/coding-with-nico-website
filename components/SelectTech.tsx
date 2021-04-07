import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'

const techImages = [
  { tech: 'React', logo: '/images/tech/react.png' },
  { tech: 'Typescript', logo: '/images/tech/typescript.png' },
  { tech: 'Graphql', logo: '/images/tech/graphql.png' },
  { tech: 'Javascript', logo: '/images/tech/javascript.png' },
  { tech: 'Rust', logo: '/images/tech/rustlang.png' },
]

const SelectTech = () => {
  const [index, setIndex] = useState<number | null>(null)
  const [minimizeTerminal, setMinimizeTerminal] = useState(false)

  return (
    <Wrapper>
      <Container>
        <Terminal
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: minimizeTerminal ? 375 : 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 16, delay: 0.2 }}
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
            <Grid style={{ border: '2px solid rgba(144, 238, 144, 0.1)' }}>
              {techImages.map(({ tech, logo }, i) => (
                <Tech
                  key={tech}
                  onMouseOver={() => setIndex(i)}
                  onMouseOut={() => setIndex(null)}
                >
                  <Link href={`/tips-tricks/${tech.toLowerCase()}`}>
                    <a>
                      <picture>
                        <source
                          srcSet={logo.replace('.png', '.webp')}
                          type="image/webp"
                        />
                        <TechImage
                          layoutId={tech.toLowerCase()}
                          src={logo}
                          alt={tech}
                        />
                      </picture>
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
            </Grid>
          </>
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
          transition={{ delay: 0.8 }}
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
    background: hsl(257, 58%, 8%);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    filter: drop-shadow(0 0.05rem 2rem rgba(131, 82, 253, 0.2));

    @media (max-width: 1024px) {
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
  padding: 5rem 5rem;
  border-radius: 0.5rem;
  position: relative;
  z-index: 3;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, auto);
    gap: 6rem;
    padding: 5rem 4rem;
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
  height: 100%;
  filter: drop-shadow(0 0.05rem 2rem rgba(131, 82, 253, 0.05));

  @media (max-width: 500px) {
    height: 80rem;
    object-fit: cover;
  }
`

const PhpJoke = styled(motion.img)`
  display: block;

  @media (max-width: 1024px) {
    display: none;
  }
`
