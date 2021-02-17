import * as React from 'react'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Wave = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x1: [336, -1000],
      transition: {
        type: 'tween',
        duration: 10,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    })
  }, [])

  return (
    <motion.svg
      viewBox="0 0 1900 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', bottom: 0, width: '100%', zIndex: 10001 }}
      width="100%"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.933899 233.782H80.2727C159.612 233.782 318.289 233.782 476.967 208.913C635.645 183.39 794.322 133.653 953 139.542C1111.68 146.087 1270.36 208.913 1429.03 196.479C1587.71 183.39 1746.39 95.695 1825.73 51.8475L1905.07 8V347H1825.73C1746.39 347 1587.71 347 1429.03 347C1270.36 347 1111.68 347 953 347C794.322 347 635.645 347 476.967 347C318.289 347 159.612 347 80.2727 347H0.933899V233.782Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M0.933899 229.782H80.2727C159.617 229.782 318.012 229.777 476.35 204.962C524.422 197.229 572.349 187.301 620.377 177.352C651.606 170.882 682.877 164.404 714.258 158.515C793.694 143.609 873.37 132.584 953.146 135.545H953.154L953.162 135.546C1021.37 138.359 1089.59 151.527 1157.47 164.629C1168.9 166.837 1180.34 169.042 1191.75 171.196C1271.07 186.163 1349.95 198.663 1428.72 192.491C1586.42 179.48 1744.38 92.2463 1823.82 48.3397L1903.16 4.49219"
        stroke="#9B51E0"
        stroke-opacity="0.75"
        stroke-width="8"
      />
      <defs>
        <motion.linearGradient
          id="paint0_linear"
          animate={controls}
          y1="8.00038"
          x2="1655.46"
          y2="109.764"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#e8b1fc" />
          <stop offset="1" stop-color="#5F0DAB" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  )
}

export default Wave
