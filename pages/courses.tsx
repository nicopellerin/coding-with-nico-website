import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import LayoutPage from '../components/LayoutPage'
import CoursesList from '../components/CoursesList'

const CoursesPage = () => {
  return (
    <LayoutPage title="Courses" bgColor="#001" img="/images/courses.png">
      <Wrapper>
        <Container>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 18,
              stiffness: 60,
              delay: 0.1,
            }}
          >
            Learn
          </Title>
          <Tagline
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 18,
              stiffness: 60,
              delay: 0.1,
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id tempore
            enim dolorem error, possimus sit veritatis voluptates cupiditate
            doloremque facere!
          </Tagline>
          <CoursesList />
        </Container>
      </Wrapper>
    </LayoutPage>
  )
}

export default CoursesPage

// Styles
const Wrapper = styled.div`
  position: relative;
  background: #001;
  z-index: 200;
`

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 2rem 2rem 10rem;

  /* @media (min-width: 768px) {
    padding: 5rem 3rem 14rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 3rem 22rem;
  } */

  @media (min-width: 1800px) {
    padding: 2rem 3rem 12rem;
  }
`

const Title = styled(motion.h2)`
  font-size: 6.2rem;
  color: #f4d7ff;
  margin-bottom: 3.2rem;
`

const Tagline = styled(motion.h3)`
  font-weight: 500;
  font-size: 2rem;
  line-height: 2em;
  margin-bottom: 8rem;
  color: #f4d7ff;

  @media (max-width: 500px) {
    line-height: 1.5em;
  }
`
