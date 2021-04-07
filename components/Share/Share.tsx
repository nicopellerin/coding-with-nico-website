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
    <Wrapper
      initial={{ x: -200, y: '-50%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', damping: 16 }}
    >
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
  position: absolute;
  right: 4rem;
  top: 6rem;
  z-index: 9000;

  @media (min-width: 1200px) {
    right: unset;
    left: 0rem;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    padding: 1.8rem 1.6rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    box-shadow: 0 0 15px 3px rgba(89, 86, 213, 0.1);
    border: 1px solid #ccc;
    border-left: none;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`

const Facebook = styled(FacebookIcon)`
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  margin-right: 1.8rem;

  @media (min-width: 1200px) {
    margin-right: 0;
    margin-bottom: 1.2rem;
    box-shadow: 0 0 15px 3px rgba(89, 86, 213, 0.15);
  }
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
  color: rebeccapurple;
  margin-bottom: 1.1rem;
  position: relative;
  letter-spacing: 1px;

  &:after {
    content: '';
    width: 1px;
    height: 6px;
    background: rebeccapurple;
    position: absolute;
    left: 27px;
    bottom: -7px;
    transform: rotate(45deg);
  }

  &:before {
    content: '';
    width: 1px;
    height: 6px;
    background: rebeccapurple;
    position: absolute;
    right: 27px;
    bottom: -7px;
    transform: rotate(-45deg);
  }

  @media (min-width: 1200px) {
    &:after,
    &:before {
      display: none;
    }
  }
`
