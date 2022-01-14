import * as React from 'react'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Bio from '../components/bio'
// Step 2: Define your component
const about = ({location}) => {
  return (
    <Layout location={location}>
      <Navbar />
      <h2>About Me</h2>
      <p>Hi there! Here is my skills and experiences TBD.</p>
      <Bio />
    </Layout>
    
  )
}
// Step 3: Export your component
export default about