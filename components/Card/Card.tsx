import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Props {
  title: string
  slug: string
  tech: string
}

const Card: React.FC<Props> = ({ title, slug, tech }) => {
  return (
    <Link href={`${tech}/${slug}`}>
      <a>
        <Wrapper
          whileHover={{ x: -3 }}
          transition={{ type: 'spring', damping: 18 }}
        >
          <Content>
            <Title>{title}</Title>
          </Content>
        </Wrapper>
      </a>
    </Link>
  )
}

export default Card

// Styles
const Wrapper = styled(motion.li)`
  background: hsl(257, 58%, 10%);
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  will-change: transform;
  position: relative;
  cursor: pointer;
  border-bottom: 2px solid var(--primaryColorDark2);
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 1.6rem 2rem;
`

const Title = styled(motion.h2)`
  font-size: 2.2rem;
  color: var(--primaryColorLight2);
  margin: 0;
  text-align: left;
  transition: color 150ms;

  ${Content}:hover & {
    color: var(--pinkTextColor);
  }
`
