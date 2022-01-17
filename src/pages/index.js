import * as React from "react"
import {graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"

const BlogIndex = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Navbar></Navbar>
      <h2>About Me</h2> 
      <p>Hi, I'm Joseph! 👋 </p>
      <p>I'm a third year student from the University of Waterloo.
      Currently pursuing a Bachelor in Environmental Studies, {' '}
      <a href="https://uwaterloo.ca/geography-environmental-management/undergraduate/geomatics">Geomatics.</a></p> 
      <p> I'm opened for the <strong>Summer 2022 co-op term</strong> so please let me know if you have an opportunity for me to learn and succeed.</p>
      <p> I would love to get involved in <strong>web developer </strong> or other <strong> programing related</strong> positions.</p>
      <h5>Projects</h5>
      ➡️ Memory Squares Game (Python) - Oct 2021 <br></br>
      ➡️ Blog and Portfolio (React, JS, CSS) - Jan 2022
      <h5>Work Experience</h5>
      ➡️ Technical Writer 📍 <a href="https://www.gofleet.com/">GoFleet Corp.</a>{'   '} Jan 2021 - Apr 2021 <br></br>
      ➡️ GIS Data Analyst 📍 Deparment of National Defence, MCE. Sept 2021 - Dec 2021  
      <h5>Hobbies and Interests</h5>
      ➡️ Reading self-help books 📖 <br></br>
      ➡️ Practicing piano 🎹 <br></br> 
      ➡️ Improving my typing speed ⌨
      <br></br>
      <br></br>
      <hr />
      <br></br>
      <Bio />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
          
        }
      }
    }
  }
`
