import * as React from 'react'
import { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'

interface Props {
  url: string
}

const Share: FC<Props> = ({ url }) => {
  return (
    <Wrapper>
      <ShareText>Share</ShareText>
      <Container>
        <motion.span
          whileHover={{ scale: 1.03, rotate: [0, 3, 0] }}
          whileTap={{ scale: 0.98 }}
        >
          <FacebookShareButton url={url}>
            <Facebook />
          </FacebookShareButton>
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.03, rotate: [0, 3, 0] }}
          whileTap={{ scale: 0.98 }}
        >
          <TwitterShareButton url={url}>
            <Twitter />
          </TwitterShareButton>
        </motion.span>
      </Container>
    </Wrapper>
  )
}

export default Share

// Styles
const Wrapper = styled(motion.div)`
  z-index: 9000;
  padding: 1.8rem 1.6rem;
  margin-top: 40px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Facebook = styled(FacebookIcon)`
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  margin-right: 30px;
  box-shadow: 0 0 15px 3px rgba(89, 86, 213, 0.15);
`

const Twitter = styled(TwitterIcon)`
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;

  @media (min-width: 1200px) {
    box-shadow: 0 0 15px 3px rgba(89, 86, 213, 0.15);
  }
`

const ShareText = styled.span`
  display: block;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primaryColor);
  margin-bottom: 14px;
  position: relative;
  letter-spacing: 1px;
`
