import React from 'react'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/500.css'

import GlobalStyles from '../styles/GlobalStyles'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import DropdownMobile from '../components/DropdownMobile'

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <RecoilRoot>
        <Navbar />
        <NavbarMobile />
        {/* <AnimateSharedLayout> */}
        <Component {...pageProps} />
        {/* </AnimateSharedLayout> */}
        <DropdownMobile />
        <GlobalStyles />
      </RecoilRoot>
    </>
  )
}

export default MyApp
