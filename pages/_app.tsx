import React from 'react'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

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
const Background = dynamic(() => import('../components/ThreeDee/Background'), {
  ssr: false,
})

import GlobalStyles from '../styles/GlobalStyles'

const MyApp = ({ Component, pageProps }: any) => {
  const router = useRouter()

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
        {router.pathname !== '/' && <Background bgColor="#001" />}
        <Component {...pageProps} />
        <DropdownMobile />
        <GlobalStyles />
      </RecoilRoot>
    </>
  )
}

export default MyApp
