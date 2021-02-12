import * as React from 'react'
import { useState, memo } from 'react'
import styled from 'styled-components'

const Me = () => {
  const [flip, setFlip] = useState(false)

  return (
    <picture
      onMouseOver={() => setFlip(true)}
      onMouseOut={() => setFlip(false)}
    >
      {/* <source srcSet="/images/me.webp" type="image/webp" /> */}
      <MeImg
        src={flip ? '/images/me2.jpg' : '/images/me.jpg'}
        alt="Nico Pellerin"
      />
    </picture>
  )
}

export default memo(Me)

// Styles
const MeImg = styled.img`
  max-width: 80%;
  border-radius: 50%;
  border: 5px solid #f4f4f4;
  margin: 0 auto;
  margin-bottom: 3rem;
  position: relative;
  z-index: 200;

  @media (min-width: 768px) {
    margin-bottom: 0rem;
    max-width: 90%;
  }
`
