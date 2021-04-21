import * as React from 'react'
import { useState, useEffect, FC } from 'react'
import styled from 'styled-components'

interface Props {
  slug: string
}

const Counter: FC<Props> = ({ slug }) => {
  const [hits, setHits] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return
    }

    fetch(`/api/hits?slug=${slug}`)
      .then((res) => res.json())
      .then((json) => {
        if (typeof json.hits === 'number') {
          setHits(json.hits)
        }
      })
  }, [slug])

  if (typeof hits === 'undefined') {
    return null
  }

  return (
    <Wrapper>
      <Text>
        This page has been visited <strong>{hits}</strong> time
        {hits === 1 ? '' : 's'}
      </Text>
    </Wrapper>
  )
}

export default Counter

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

const Text = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--primaryColorLight);
`
