import { useState } from 'react'

import HeroBackground from '../components/HeroBackground'
import Layout from '../components/Layout'

const IndexPage = () => {
  const [toggleDropdown, setToggleDropwdown] = useState(false)

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <HeroBackground
        toggleDropdown={toggleDropdown}
        setToggleDropdown={setToggleDropwdown}
      />
    </Layout>
  )
}

export default IndexPage
