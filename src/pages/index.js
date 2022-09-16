import * as React from "react"
import {graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import ReactMarkdown from 'react-markdown'

const BlogIndex = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const homeContent = `
  ## About Me

  Hi, I'm Joseph 👋

  I'm opened to work in the **Winter 2023 co-op term** so please let me know if you have an opportunity for me to learn and succeed.
  
  I would love to get involved in **web design, game development** or other **software related** positions
  
  ##### Projects

  ➡️ Blog and Portfolio (React, JS, CSS) - Jan 2022  
  ➡️ Memory Squares Game (Python) - Oct 2021

  ##### Work Experience

  ➡️ Software Developer 📍 [OpenText Corp.](https://www.opentext.com/) May 2022 - Aug 2022  
  ➡️ GIS Data Analyst 📍 Dept of National Defence, MCE. Sept 2021 - Dec 2021  
  ➡️ Technical Writer 📍 [GoFleet Corp](https://www.gofleet.com/") Jan 2021 - Apr 2021

  ##### Hobbies and Interest

  ➡️ Reading self-help books 📖  
  ➡️ Studying the Tagalog language 🇵🇭  
  ➡️ Improving my typing speed ⌨

  ---


  `;
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Navbar></Navbar>
      <ReactMarkdown>{homeContent}</ReactMarkdown>
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
