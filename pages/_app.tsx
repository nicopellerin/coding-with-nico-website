import React from 'react'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'

import '@fontsource/lora'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/500.css'

import Navbar from '../components/Navigation/Navbar'
import NavbarMobile from '../components/Navigation/NavbarMobile'
import DropdownMobile from '../components/Navigation/DropdownMobile'

import GlobalStyles from '../styles/GlobalStyles'

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
