import * as React from 'react'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Bio from '../components/bio'
import Seo from '../components/seo'

const gratitude = ({location}) => {
  return (
    <Layout location={location}>
      <Seo title="Gratitude" />
      <Navbar />
      <h2>Gratitude</h2>
      <Bio />
    </Layout>
  )
}

export default gratitude