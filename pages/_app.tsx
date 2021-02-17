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
import { AnimateSharedLayout } from 'framer-motion'
import Footer from '../components/Footer'

interface Props {
  Component: any
  pageProps: any
}

const MyApp = ({ Component, pageProps }: Props) => {
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
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
        <Footer />
        <GlobalStyles />
      </RecoilRoot>
    </>
  )
}

export default MyApp
