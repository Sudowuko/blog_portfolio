import * as React from 'react'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Bio from '../components/bio'
import Seo from '../components/seo'

const about = ({location}) => {
  return (
    <Layout location={location}>
      <Seo title="About Me" />
      <Navbar />
      <h2>About Me</h2>
      <p>Hi there! Here is my skills and experiences TBD.</p>
      <Bio />
    </Layout>
    
  )
}

export default about