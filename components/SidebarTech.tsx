import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useRecoilState } from 'recoil'

import { techSidebarOpenState } from '../store/tech-sidebar'

const techImages = [
  { tech: 'React', logo: '/images/tech/react.png' },
  { tech: 'Typescript', logo: '/images/tech/typescript.png' },
  { tech: 'Graphql', logo: '/images/tech/graphql.png' },
  { tech: 'Javascript', logo: '/images/tech/javascript.png' },
  { tech: 'Rust', logo: '/images/tech/rustlang.png' },
]

const SidebarTech = () => {
  const { pathname } = useRouter()

  const [open, setOpen] = useRecoilState(techSidebarOpenState)

  return (
    <Wrapper
      initial={{ x: 100 }}
      animate={{ x: open ? 0 : '6.8rem' }}
      transition={{ type: 'spring', damping: 18 }}
    >
      <Bar onClick={() => setOpen((prevState) => !prevState)}>
        {open ? (
          <FaChevronRight style={{ fontSize: '1.4rem', color: 'pink' }} />
        ) : (
          <FaChevronLeft style={{ fontSize: '1.4rem', color: 'pink' }} />
        )}
      </Bar>
      {techImages
        .filter(({ tech }) => !pathname.includes(tech.toLowerCase()))
        .map(({ tech, logo }) => (
          <li key={tech}>
            <Link href={`/tips-tricks/${tech.toLowerCase()}`}>
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
  position: fixed;
  right: 0;
  bottom: 3rem;
  list-style: none;
  display: grid;
  gap: 2.5em;
  background: rgba(131, 82, 253, 0.08);
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border: 1px solid rgba(131, 82, 253, 0.15);
  border-right: none;
  filter: drop-shadow(0 0.05rem 2rem rgba(131, 82, 253, 0.1));

  @media (max-width: 500px) {
    display: none;
  }
`

const Tech = styled(motion.img)`
  width: 5rem;
  border-radius: 10%;
`

const Bar = styled.div`
  background: rgba(131, 82, 253, 0.1);
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border: 1px solid rgba(131, 82, 253, 0.15);
  border-right: none;
  filter: drop-shadow(0 0.05rem 2rem rgba(131, 82, 253, 0.1));
  position: absolute;
  left: -18px;
  top: 50%;
  transform: translateY(-50%);
  height: 120px;
  width: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
