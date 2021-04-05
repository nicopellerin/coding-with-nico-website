import * as React from 'react'
import { useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'
import Link from 'next/link'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { useRouter } from 'next/router'

import SoundControl from './SoundControl'
import LogoAnim from './LogoAnim'

import { audioOnState } from '../../store/audio'

const links: Link[] = [
  { text: 'About', link: '/about' },
  { text: 'Tips & Tricks', link: '/tips-tricks' },
  { text: 'Courses', link: '/courses' },
  { text: 'Contact', link: '/contact' },
]

interface Link {
  text: string
  link: string
}

interface StyledProps {
  active?: boolean
}

const Navbar = () => {
  const { pathname } = useRouter()

  const [index, setIndex] = useState<number | null>(null)

  const audioOn = useRecoilValue(audioOnState)

  let popSound: HTMLAudioElement
  // let clickSound: HTMLAudioElement

  if (typeof Audio !== 'undefined') {
    popSound = new Audio('/sounds/pop_drip.mp3')
    // clickSound = new Audio('/sounds/click_snip.mp3')
  }

  return (
    <Wrapper>
      <Link href="/">
        <a>
          <LogoAnim />
        </a>
      </Link>
      <Menu>
        <MenuList onMouseLeave={() => setIndex(null)}>
          <AnimateSharedLayout>
            {links.map(({ text, link }, i) => (
              <MenuListItem
                key={link}
                onMouseOver={() => {
                  setIndex(i)
                }}
                onClick={() => audioOn && popSound.play()}
                active={pathname.includes(link)}
              >
                <Link href={link}>
                  <a>
                    {text}
                    {index === i && (
                      <motion.div
                        layoutId="menuItem"
                        initial={{ y: 1 }}
                        animate={{ y: 0 }}
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '0.3rem',
                          background: '#F6DEFF',
                          bottom: '-1.1rem',
                          borderRadius: '0.5rem',
                        }}
                      />
                    )}
                  </a>
                </Link>
              </MenuListItem>
            ))}
          </AnimateSharedLayout>
        </MenuList>
        <Controls>
          {/* <Link href="/login">
            <a>
              <Button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => audioOn && clickSound.play()}
              >
                Login
              </Button>
            </a>
          </Link> */}
          <SoundControl />
        </Controls>
      </Menu>
    </Wrapper>
  )
}

export default React.memo(Navbar)

// Styles
const Wrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 10000;
    padding: 2rem 3rem;
    max-width: 140rem;
    pointer-events: none;
  }

  @media (min-width: 1369px) {
    padding: 2.4rem 0rem;
  }

  @media (min-width: 1700px) {
    max-width: 160rem;
  }
`

const Menu = styled.nav`
  display: flex;
  pointer-events: all;
`

const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem 0;
`

const MenuListItem = styled.li`
  font-size: 2rem;
  color: #f4d7ff;
  cursor: pointer;
  position: relative;

  &::before {
    display: ${(props: StyledProps) => (props.active ? 'block' : 'none')};
    content: '';
    position: absolute;
    width: 100%;
    height: 0.3rem;
    background: #f6deff;
    bottom: -1.1rem;
    border-radius: 0.5rem;
  }

  &:not(:last-child) {
    margin-right: 5rem;

    &::after {
      content: '';
      position: absolute;
      height: 110%;
      width: 2px;
      background: rgba(227, 154, 255, 0.2);
      right: -2.5rem;
      top: 0;
    }
  }

  &:not(:nth-child(4)) {
    margin-right: 5rem;

    &::after {
      content: '';
      position: absolute;
      height: 110%;
      width: 2px;
      background: rgba(227, 154, 255, 0.2);
      right: -2.5rem;
      top: 0;
    }
  }

  & > a {
    position: relative;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    color: #f4d7ff;
  }
`

// const Button = styled(motion.button)`
//   border: none;
//   padding: 1rem 2.6rem;
//   font-size: 2.2rem;
//   border-radius: 0.5rem;
//   font-weight: 600;
//   background: linear-gradient(95.66deg, #61dafb 30.07%, #bb6bd9 104.98%);
//   color: #333;
//   cursor: pointer;
//   position: relative;
//   z-index: 900;
//   outline: none;
//   margin-left: 4rem;

//   @media (max-width: 330px) {
//     font-size: 1.8rem;
//   }

//   @media (min-width: 768px) {
//     font-size: 2.2rem;
//   }

//   @media (min-width: 1366px) {
//     /* font-size: 2.4rem; */
//   }
// `

const Controls = styled.div`
  display: flex;
  align-items: center;
`
