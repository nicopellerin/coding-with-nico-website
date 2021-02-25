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

const Card: React.FC<Props> = ({ title, image, tech, slug }) => {
  //   const imageName = image?.split(".")[0]
  //   const mobileImage = `${imageName}.png`

  return (
    <Link href={slug}>
      <Wrapper
        image={image}
        whileHover={{ scale: [1, 1.04, 1.02], y: [0, -5] }}
      >
        <Content>
          <Title>{title}</Title>
          <TechLogo
            src={`https://images.weserv.nl/?url=${encodeURI(
              `https://functionsnstuff.netlify.app/icons/${tech}.png`
            )}&w=100`}
            alt={tech}
          />
        </Content>

        <CardImage src={image} alt={tech} />
      </Wrapper>
    </Link>
  )
}

export default Card

// Styles
const Wrapper = styled(motion.div)`
  background: ${(props: { image: string }) => `url(${props.image})`};
  background-size: cover;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  height: 25rem;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  will-change: transform;
  position: relative;
  cursor: pointer;
  border: 1px solid rgba(131, 82, 253, 0.3);
  filter: drop-shadow(0 0.05rem 2rem rgba(131, 82, 253, 0.1));

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

// const Picture = styled.picture`
//   width: 100%;
//   height: 25rem;
//   position: absolute;
// `

const CardImage = styled.img`
  width: 100%;
  height: 25rem;
  object-fit: cover;
  position: absolute;
  border-radius: 10px;
`

const Title = styled.h2`
  font-size: 2.6rem;
  color: var(--menuColor);
  max-width: 80%;
  margin: 0;
  text-align: left;
`

const TechLogo = styled.img`
  max-width: 50px;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
`
