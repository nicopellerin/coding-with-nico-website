import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import LayoutPage from '../components/Layout/LayoutPage'
import CoursesList from '../components/Courses/CoursesList'

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
            Learn new coding skills <span role="icon">&#128640;</span>
          </Title>
          {/* <Tagline
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 18,
              stiffness: 60,
              delay: 0.1,
            }}
          >
            Here you will find courses I offer to help improve your knowledge
          </Tagline> */}
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
  padding: 2rem 0rem 4rem;

  @media (min-width: 1800px) {
    padding: 2rem 3rem 4rem;
  }
`

const Title = styled(motion.h2)`
  font-size: 5.4rem;
  color: #f4d7ff;
  margin-bottom: 5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 6.2rem;
    margin-bottom: 8rem;
  }
`

// const Tagline = styled(motion.h3)`
//   font-weight: 500;
//   font-size: 2rem;
//   line-height: 2em;
//   margin-bottom: 8rem;
//   color: #f4d7ff;
//   max-width: 70ch;

//   @media (max-width: 500px) {
//     line-height: 1.5em;
//     margin-bottom: 6rem;
//   }
// `
