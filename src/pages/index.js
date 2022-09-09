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
      <p>I'm a third year student from the University of Waterloo, 
      currently pursuing a Bachelor in Environmental Studies, {' '}
      <a href="https://uwaterloo.ca/geography-environmental-management/undergraduate/geomatics">Geomatics</a> {' '} with a double minor in Computing and Economics.</p> 
      <p> I'm opened to work in the <strong>Winter 2023 co-op term</strong> so please let me know if you have an opportunity for me to learn and succeed.</p>
      <p> I would love to get involved in <strong>web design, game development </strong> or other <strong> programming related</strong> positions.</p>
      <h5>Projects</h5>
      ➡️ Blog and Portfolio (React, JS, CSS) - Jan 2022
      ➡️ Memory Squares Game (Python) - Oct 2021 <br></br>
      <h5>Work Experience</h5>
      ➡️ Software Devloper 📍 <a href="https://www.opentext.com/">OpenText</a>{'   '} May 2022 - Aug 2022 <br></br>
      ➡️ GIS Data Analyst 📍 Department of National Defence, MCE. Sept 2021 - Dec 2021  
      ➡️ Technical Writer 📍 <a href="https://www.gofleet.com/">GoFleet Corp.</a>{'   '} Jan 2021 - Apr 2021 <br></br>
      <h5>Hobbies and Interests</h5>
      ➡️ Reading self-help books 📖 <br></br>
      ➡️ Studying the Tagalog language 🇵🇭 <br></br> 
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
