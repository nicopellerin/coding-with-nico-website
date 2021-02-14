import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

const width = 80

const techImages = [
  { tech: 'React', logo: '/images/tech/react.png', width },
  { tech: 'Typescript', logo: '/images/tech/typescript.png', width },
  { tech: 'Graphql', logo: '/images/tech/graphql.png', width },
  { tech: 'Javascript', logo: '/images/tech/javascript.png', width },
  { tech: 'Rust', logo: '/images/tech/rustlang.png', width },
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

  useEffect(() => {
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

  return (
    <Wrapper>
      <Container>
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
                  {techImages.map(({ tech, logo, width }, i) => (
                    <Tech
                      key={tech}
                      onMouseOver={() => setIndex(i)}
                      onMouseOut={() => setIndex(null)}
                      variants={item}
                    >
                      <motion.img
                        src={logo}
                        alt={tech}
                        width={width}
                        whileHover={{ scale: 1.05 }}
                      />
                      {index === i && (
                        <Name
                          initial={{ x: '-50%', opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {tech}
                        </Name>
                      )}
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
        <Terminal
          src="/images/terminal.png"
          style={{ position: 'absolute', width: '90rem', top: '2rem' }}
        />
      </Container>
    </Wrapper>
  )
}

export default SelectTech

// Styles
const Wrapper = styled.div`
  height: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Title = styled(motion.pre)`
  font-size: 3rem;
  color: lightgreen;
  margin-bottom: 5rem;
  position: relative;
  z-index: 2;
`

const Grid = styled(motion.div)`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, auto);
  gap: 6rem;
  border: 3px solid rgba(102, 51, 153, 0.1);
  padding: 5rem 4rem;
  border-radius: 0.5rem;
  position: relative;
  z-index: 3;
`

const Tech = styled(motion.div)`
  position: relative;
  cursor: pointer;
`

const Name = styled(motion.span)`
  position: absolute;
  left: 50%;
  bottom: -3.2rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #f4d7ff;
`

const Terminal = styled(motion.img)`
  filter: drop-shadow(0 0.05rem 2rem rgba(131, 82, 253, 0.05));
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
`
