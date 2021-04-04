import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Wave = () => {
  return (
    <WaveStyled
      viewBox="0 0 1900 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.933899 233.782H80.2727C159.612 233.782 318.289 233.782 476.967 208.913C635.645 183.39 794.322 133.653 953 139.542C1111.68 146.087 1270.36 208.913 1429.03 196.479C1587.71 183.39 1746.39 95.695 1825.73 51.8475L1905.07 8V347H1825.73C1746.39 347 1587.71 347 1429.03 347C1270.36 347 1111.68 347 953 347C794.322 347 635.645 347 476.967 347C318.289 347 159.612 347 80.2727 347H0.933899V233.782Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M0.933899 229.782H80.2727C159.617 229.782 318.012 229.777 476.35 204.962C524.422 197.229 572.349 187.301 620.377 177.352C651.606 170.882 682.877 164.404 714.258 158.515C793.694 143.609 873.37 132.584 953.146 135.545H953.154L953.162 135.546C1021.37 138.359 1089.59 151.527 1157.47 164.629C1168.9 166.837 1180.34 169.042 1191.75 171.196C1271.07 186.163 1349.95 198.663 1428.72 192.491C1586.42 179.48 1744.38 92.2463 1823.82 48.3397L1903.16 4.49219"
        stroke="hsl(257, 98%, 78%)"
        strokeOpacity="0.75"
        strokeWidth="8"
      />
      <defs>
        <motion.linearGradient
          id="paint0_linear"
          y1="8.00038"
          x2="1655.46"
          y2="109.764"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="hsl(257, 98%, 80%)" />
        </motion.linearGradient>
      </defs>
    </WaveStyled>
  )
}

export default Wave

// Styles
const WaveStyled = styled(motion.svg)`
  position: fixed;
  bottom: 0;
  width: 103%;
  z-index: 10001;
  left: -3%;
  right: -3%;
  pointer-events: none;

  @media (min-width: 1024px) {
    bottom: -10px;
  }

  @media (min-width: 1440px) {
    bottom: -30px;
  }
`
