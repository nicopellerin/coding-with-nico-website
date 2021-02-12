import { useState } from 'react'

import HeroBackground from '../components/HeroBackground'
import Layout from '../components/Layout'

const IndexPage = () => {
  const [toggleDropdown, setToggleDropwdown] = useState(false)

  return (
    <Layout title="Coding With Nico">
      <HeroBackground
        toggleDropdown={toggleDropdown}
        setToggleDropdown={setToggleDropwdown}
      />
    </Layout>
  )
}

export default IndexPage
