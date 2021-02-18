import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const techImages = [
  { tech: 'react', logo: '/images/tech/react.png' },
  { tech: 'typescript', logo: '/images/tech/typescript.png' },
  { tech: 'graphql', logo: '/images/tech/graphql.png' },
  { tech: 'javascript', logo: '/images/tech/javascript.png' },
  { tech: 'rust', logo: '/images/tech/rustlang.png' },
]

const list = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.3,
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
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -50 },
}

const TechBar = () => {
  return (
    <Wrapper variants={list} initial="hidden" animate="visible">
      {techImages.map(({ tech, logo }) => (
        <Logo src={logo} alt={tech} variants={item} />
      ))}
    </Wrapper>
  )
}

export default TechBar

// Styles
const Wrapper = styled(motion.div)`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, auto);
  gap: 3rem;
  margin-left: 0rem;
  margin-bottom: 4rem;
  order: -1;

  @media (min-width: 768px) {
    margin-left: 4rem;
    margin-bottom: 0;
    order: 0;
    gap: 2.2rem;
  }

  @media (min-width: 1440px) {
    margin-left: 5rem;
    margin-bottom: 0;
    gap: 3rem;
    order: 0;
  }
`

const Logo = styled(motion.img)`
  width: 4rem;

  @media (min-width: 768px) {
    width: 4.2rem;
  }

  @media (min-width: 1440px) {
    width: 5rem;
  }
`
