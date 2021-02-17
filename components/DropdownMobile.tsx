import * as React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FaLaptopCode } from 'react-icons/fa'
import { useRecoilState } from 'recoil'

import { mobileDropdownState } from '../store/navigation'

const listVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 80,
      velocity: 2,
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'spring',
      damping: 100,
      stiffness: 80,
      staggerChildren: 0.7,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 80,
    },
  },
}

const DropdownMobile: React.FC = () => {
  const [toggleDropdown, setToggleDropdown] = useRecoilState(
    mobileDropdownState
  )

  return (
    <>
      <AnimatePresence>
        {toggleDropdown && (
          <DropdownWrapper
            initial={{ y: 300, x: '-50%' }}
            animate={{ y: 0 }}
            exit={{ y: 300 }}
            transition={{ type: 'spring', damping: 18 }}
          >
            <DropdownList
              variants={listVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <DropdownItem
                onClick={() => setToggleDropdown(false)}
                variants={itemVariants}
                style={{
                  borderBottom: '1px solid rgba(221,94,152, 0.2)',
                  paddingBottom: '2rem',
                  marginBottom: '2rem',
                }}
              >
                <FaLaptopCode
                  color="#dd5e98"
                  size={24}
                  style={{ marginRight: 15 }}
                />
                <LinkStyled href="#courses">Courses</LinkStyled>
              </DropdownItem>
              <DropdownItem variants={itemVariants}>
                <LinkStyled
                  href="https://github.com/nicopellerin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub
                    color="#dd5e98"
                    size={24}
                    style={{ marginRight: 15 }}
                  />{' '}
                  Github
                </LinkStyled>
              </DropdownItem>
              <DropdownItem variants={itemVariants}>
                <LinkStyled
                  href="https://twitter.com/nicopellerin_io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiTwitter
                    color="#dd5e98"
                    size={24}
                    style={{ marginRight: 15 }}
                  />{' '}
                  Twitter
                </LinkStyled>
              </DropdownItem>
              <DropdownItem variants={itemVariants}>
                <LinkStyled
                  href="https://twitter.com/nicopellerin_io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiInstagram
                    color="#dd5e98"
                    size={24}
                    style={{ marginRight: 15 }}
                  />{' '}
                  Instagram
                </LinkStyled>
              </DropdownItem>
            </DropdownList>
            <Overlay />
          </DropdownWrapper>
        )}
      </AnimatePresence>
    </>
  )
}

export default DropdownMobile

// Styles
const Overlay = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 1);
  opacity: 0;
  /* backdrop-filter: blur(10px); */
  /* z-index: 998; */
`

const DropdownWrapper = styled(motion.div)`
  position: absolute;
  height: 33rem;
  width: 100%;
  background: #112;
  bottom: 0;
  left: 50%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top: 5px solid #dd5e98;
  z-index: 10000;
`

const DropdownList = styled(motion.ul)`
  padding: 3rem;
`

const DropdownItem = styled(motion.li)`
  display: flex;
  font-size: 1.8rem;
  text-align: center;

  &:not(:last-of-type) {
    margin-bottom: 3rem;
  }
`

const LinkStyled = styled.a`
  color: #dd5e98;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  letter-spacing: 1.2px;
`
