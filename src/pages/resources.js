import * as React from 'react'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Bio from '../components/bio'
import Seo from '../components/seo'

const resources = ({location}) => {
  return (
    <Layout location={location}>
      <Seo title="Resources" />
      <Navbar />
      <h2>Resources</h2>
      <Bio />
    </Layout>
  )
}

export default resources