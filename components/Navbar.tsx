import React, { useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

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

const Navbar = () => {
  const [index, setIndex] = useState<number | null>(null)

  return (
    <Wrapper>
      <Link href="/">
        <a>
          <Logo src="/images/logo.svg" alt="Logo" />
        </a>
      </Link>
      <Menu>
        <MenuList onMouseLeave={() => setIndex(null)}>
          <AnimateSharedLayout>
            {links.map(({ text, link }, i) => (
              <MenuListItem key={link} onMouseOver={() => setIndex(i)}>
                <Link href={link}>
                  <StyledLink>
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
                  </StyledLink>
                </Link>
              </MenuListItem>
            ))}
          </AnimateSharedLayout>
          <Button whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
            Login
          </Button>
        </MenuList>
      </Menu>
    </Wrapper>
  )
}

export default Navbar

// Styles
const Wrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 100;
    padding: 3rem 0rem;
    max-width: 140rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 0rem;
  }

  @media (min-width: 1700px) {
    padding: 3rem 0rem;
    max-width: 160rem;
  }
`

const Menu = styled.nav`
  display: flex;
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

  &:not(:last-child, :nth-child(4)) {
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
`

const StyledLink = styled.a`
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
`

const Button = styled(motion.button)`
  border: none;
  padding: 1rem 2.6rem;
  font-size: 2.2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  background: linear-gradient(95.66deg, #61dafb 30.07%, #bb6bd9 104.98%);
  color: #333;
  cursor: pointer;
  position: relative;
  z-index: 900;
  /* box-shadow: 0 0 15px 3px rgba(89, 86, 213, 0.7); */
  outline: none;
  margin-left: 4rem;

  @media (max-width: 330px) {
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media (min-width: 1366px) {
    /* font-size: 2.4rem; */
  }
`

const Logo = styled.img`
  width: 33rem;
`
