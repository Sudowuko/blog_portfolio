import * as React from 'react'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Bio from '../components/bio'
// Step 2: Define your component
const gratitude = ({location}) => {
  return (
    <Layout location={location}>
      <Navbar />
      <h2>Gratitude</h2>
      <Bio />
    </Layout>
  )
}
// Step 3: Export your component
export default gratitude