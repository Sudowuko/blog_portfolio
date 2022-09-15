import * as React from 'react'
import { graphql } from 'gatsby'
import CategoryList from '../components/category-list'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from '../components/navbar'



const GratitudeIndex = ({data, location}) => {
  const posts = data.allMarkdownRemark.nodes.filter(post=>{return post.frontmatter.category === "Gratitude"})
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
        <Seo title="Gratitude" />
        <Navbar></Navbar>
        <h2>Gratitude Testing</h2>
        {/* <CategoryList location={location} data={data} posts={posts} category={"Gratitude"}>
        </CategoryList> */}
     
    </Layout>
    
  )
}

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

export default GratitudeIndex