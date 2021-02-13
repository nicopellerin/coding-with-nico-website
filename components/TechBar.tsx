import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const techImages = [
  { tech: 'react', logo: '/images/tech/react.png', width: 50 },
  { tech: 'typescript', logo: '/images/tech/typescript.png', width: 50 },
  { tech: 'graphql', logo: '/images/tech/graphql.png', width: 50 },
  { tech: 'javascript', logo: '/images/tech/javascript.png', width: 50 },
  { tech: 'rust', logo: '/images/tech/rustlang.png', width: 50 },
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
      {techImages.map(({ tech, logo, width }) => (
        <motion.img src={logo} alt={tech} width={width} variants={item} />
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
  margin-left: 5rem;
`
