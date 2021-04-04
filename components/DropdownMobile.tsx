import * as React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'

import { mobileDropdownState } from '../store/navigation'

const listVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 80,
      velocity: 2,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'spring',
      damping: 18,
      stiffness: 80,
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
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

interface StyledProps {
  isRootOrLogin?: boolean
}

const DropdownMobile: React.FC = () => {
  const { pathname } = useRouter()
  const isRootOrLogin = pathname === '/' || pathname.includes('login')

  const [toggleDropdown, setToggleDropdown] = useRecoilState(
    mobileDropdownState
  )

  useEffect(() => {
    if (toggleDropdown) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [toggleDropdown])

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {toggleDropdown && (
          <>
            <DropdownWrapper
              initial={{ y: 400, x: '-50%' }}
              animate={{ y: 0 }}
              exit={{ y: 400 }}
              transition={{ type: 'spring', damping: 18 }}
              isRootOrLogin={isRootOrLogin}
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
                  <FaChevronRight
                    color="#dd5e98"
                    size={18}
                    style={{ marginRight: 15 }}
                  />
                  <LinkStyled href="/about">About</LinkStyled>
                </DropdownItem>
                <DropdownItem
                  onClick={() => setToggleDropdown(false)}
                  variants={itemVariants}
                  style={{
                    borderBottom: '1px solid rgba(221,94,152, 0.2)',
                    paddingBottom: '2rem',
                    marginBottom: '2rem',
                  }}
                >
                  <FaChevronRight
                    color="#dd5e98"
                    size={18}
                    style={{ marginRight: 15 }}
                  />
                  <LinkStyled href="/tips-tricks">{'Tips & Tricks'}</LinkStyled>
                </DropdownItem>
                <DropdownItem
                  onClick={() => setToggleDropdown(false)}
                  variants={itemVariants}
                  style={{
                    borderBottom: '1px solid rgba(221,94,152, 0.2)',
                    paddingBottom: '2rem',
                    marginBottom: '2rem',
                  }}
                >
                  <FaChevronRight
                    color="#dd5e98"
                    size={18}
                    style={{ marginRight: 15 }}
                  />
                  <LinkStyled href="/courses">Courses</LinkStyled>
                </DropdownItem>
                <DropdownItem
                  onClick={() => setToggleDropdown(false)}
                  variants={itemVariants}
                  style={{
                    paddingBottom: '2rem',
                    marginBottom: '2rem',
                  }}
                >
                  <FaChevronRight
                    color="#dd5e98"
                    size={18}
                    style={{ marginRight: 15 }}
                  />
                  <LinkStyled href="/contact">Contact</LinkStyled>
                </DropdownItem>
                {/* <LinkStyled href="/login">
                  <Button
                    onClick={() => setToggleDropdown(false)}
                    variants={itemVariants}
                  >
                    Login
                  </Button>
                </LinkStyled> */}
              </DropdownList>
            </DropdownWrapper>
            <Overlay
              onClick={() => setToggleDropdown(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', damping: 18 }}
            />
          </>
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
  background: rgba(0, 0, 0, 0.8);
  z-index: 2000;
`

const DropdownWrapper = styled(motion.div)`
  position: absolute;
  height: ${(props: StyledProps) => (props.isRootOrLogin ? '300px' : '260px')};
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
  font-size: 2rem;
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

// const Button = styled(motion.button)`
//   border: none;
//   padding: 0.65em 2.6em;
//   font-size: 2.2rem;
//   border-radius: 0.5rem;
//   font-weight: 600;
//   background: linear-gradient(95.66deg, #61dafb 30.07%, #bb6bd9 104.98%);
//   color: #333;
//   cursor: pointer;
//   position: relative;
//   z-index: 900;
//   outline: none;
//   width: 100%;
// `
