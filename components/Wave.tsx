import React from 'react'
import { motion } from 'framer-motion'

const Wave = () => (
  <motion.svg
    viewBox="0 0 1920 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', bottom: 0 }}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 239.782H88C168 239.782 328 239.782 488 214.913C648 189.39 808 139.653 968 145.542C1128 152.087 1288 214.913 1448 202.479C1608 189.39 1768 101.695 1848 57.8475L1928 14V353H1848C1768 353 1608 353 1448 353C1288 353 1128 353 968 353C808 353 648 353 488 353C328 353 168 353 88 353H8V239.782Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M8 235.782H88C168.005 235.782 327.72 235.777 487.378 210.962C535.85 203.229 584.177 193.301 632.605 183.352C664.094 176.882 695.626 170.404 727.268 164.515C807.366 149.609 887.706 138.584 968.147 141.545H968.155L968.163 141.546C1036.94 144.359 1105.73 157.527 1174.17 170.629C1185.7 172.837 1197.23 175.042 1208.74 177.196C1288.72 192.163 1368.26 204.663 1447.68 198.491C1606.7 185.48 1765.97 98.2463 1846.08 54.3397L1926.08 10.4922"
      stroke="#9B51E0"
      stroke-opacity="0.75"
      stroke-width="8"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="336"
        y1="14.0004"
        x2="1676.18"
        y2="117.457"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F6DEFF" />
        <stop offset="1" stopColor="#5F0DAB" />
      </linearGradient>
    </defs>
  </motion.svg>
)

export default Wave
