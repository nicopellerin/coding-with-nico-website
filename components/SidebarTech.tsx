import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

const techImages = [
  { tech: 'React', logo: '/images/tech/react.png' },
  { tech: 'Typescript', logo: '/images/tech/typescript.png' },
  { tech: 'Graphql', logo: '/images/tech/graphql.png' },
  { tech: 'Javascript', logo: '/images/tech/javascript.png' },
  { tech: 'Rust', logo: '/images/tech/rustlang.png' },
]

const SidebarTech = () => {
  const { pathname } = useRouter()

  return (
    <Wrapper
      initial={{ y: '-50%', x: 100 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', damping: 18, delay: 1.2 }}
    >
      {techImages
        .filter(({ tech }) => !pathname.includes(tech.toLowerCase()))
        .map(({ tech, logo }) => (
          <li key={tech}>
            <Link href={tech.toLowerCase()}>
              <a>
                <Tech src={logo} alt={tech} whileHover={{ scale: 1.03 }} />
              </a>
            </Link>
          </li>
        ))}
    </Wrapper>
  )
}

export default SidebarTech

// Styles
const Wrapper = styled(motion.ul)`
  padding: 2em 1.6em;
  margin: 0;
  position: absolute;
  right: 0;
  top: 50%;
  list-style: none;
  display: grid;
  gap: 2.5em;
  background: #112;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border: 1px solid rgba(131, 82, 253, 0.15);
  border-right: none;
  filter: drop-shadow(0 0.05rem 2rem rgba(131, 82, 253, 0.1));
`

const Tech = styled(motion.img)`
  width: 5rem;
  border-radius: 10%;
`
