import * as React from 'react'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Bio from '../components/bio'
// Step 2: Define your component
const resources = ({location}) => {
  return (
    <Layout location={location}>
      <Navbar />
      <h2>Resources</h2>
      <Bio />
    </Layout>
  )
}
// Step 3: Export your component
export default resources