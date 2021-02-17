import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const coursesData = [
  {
    title: 'Learn Framer Motion',
    url: 'https://learnframermotion.com',
    img: '/images/og-image.jpg',
    techs: ['react', 'framer-motion'],
    desc:
      'Interactive video course that teaches you all things animation using the powerful React library Framer Motion.',
  },
]

const CoursesList = () => {
  return (
    <Wrapper
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        damping: 18,
        stiffness: 60,
        delay: 0.3,
      }}
    >
      {coursesData.map(({ title, img, url, desc, techs }) => (
        <CourseCard key={url}>
          <a href={url} target="_blank" rel="noopener">
            <CourseCardImage src={img} alt={title} />
          </a>
          <CourseCardInfo>
            <CourseCardTitle>{title}</CourseCardTitle>
            <TechsGrid>
              {techs.map((tech) => (
                <img
                  src={`/images/tech/${tech}.png`}
                  alt={tech}
                  style={{ maxWidth: 30 }}
                />
              ))}
            </TechsGrid>
            <CourseCardDesc>{desc}</CourseCardDesc>
            <a href={url} target="_blank" rel="noopener">
              <Button whileHover={{ y: -1 }}>Learn more</Button>
            </a>
          </CourseCardInfo>
        </CourseCard>
      ))}
    </Wrapper>
  )
}

export default CoursesList

// Styles
const Wrapper = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`

const CourseCard = styled(motion.li)`
  background: #000;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid #112;
  filter: drop-shadow(0 0.05rem 2rem rgba(131, 82, 253, 0.1));
  width: 100%;

  @media (min-width: 1024px) {
    width: 50rem;
  }
`

const CourseCardInfo = styled.div`
  padding: 3rem 4rem 4rem;
  border-top: 1px solid #112;
`

const CourseCardTitle = styled.h2`
  font-size: 4rem;
  color: #f4d7ff;
  margin-bottom: 0rem;
`

const CourseCardDesc = styled.p`
  line-height: 1.6;
  margin: 0;
  margin-bottom: 3rem;
`

const Button = styled(motion.button)`
  border: none;
  padding: 1.4rem 2.6rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  font-weight: 700;
  background: linear-gradient(95.66deg, #61dafb 30.07%, #bb6bd9 104.98%);
  color: #333;
  cursor: pointer;
  position: relative;
  z-index: 900;
  box-shadow: 0 0 15px 3px rgba(89, 86, 213, 0.7);
  outline: none;
  font-family: 'Space Grotesk', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: 100%;

  @media (max-width: 330px) {
    font-size: 1.8rem;
  }
`

const TechsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(30px, auto));
  gap: 2rem;
  background: rgba(89, 86, 213, 0.1);
  justify-items: start;
  justify-content: start;
  width: auto;
  padding: 1rem 1rem;
  margin: 1.4rem 0;
  border-radius: 0.5rem;
`

const CourseCardImage = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  object-position: center;

  ${Button}:hover & {
    transform: scale(2);
  }
`
