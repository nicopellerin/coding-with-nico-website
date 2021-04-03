import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Props {
  title: string
  image: string
  slug: string
  tech?: string
}

const Card: React.FC<Props> = ({ title, slug }) => {
  return (
    <Link href={slug}>
      <Wrapper
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', damping: 18 }}
      >
        <Content>
          <Title>{title}</Title>
        </Content>

        {/* <CardImage src={image} alt={tech} /> */}
      </Wrapper>
    </Link>
  )
}

export default Card

// Styles
const Wrapper = styled(motion.li)`
  /* background: hsl(257, 58%, 11%); */
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  will-change: transform;
  position: relative;
  cursor: pointer;
  border-bottom: 2px solid var(--primaryColorLight);
  /* filter: drop-shadow(0 0.05rem 2rem rgba(131, 82, 253, 0.1)); */

  @media (max-width: 339px) {
    max-width: 300px;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 1.6rem 2rem;
`

const Title = styled(motion.h2)`
  font-size: 2.6rem;
  color: var(--primaryColorLight2);
  max-width: 80%;
  margin: 0;
  text-align: left;
  transition: color 150ms;

  &:hover {
    color: var(--pinkTextColor);
  }
`
