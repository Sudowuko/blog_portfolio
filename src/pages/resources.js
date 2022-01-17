import * as React from 'react'
import { graphql } from 'gatsby'
import CategoryList from '../components/category-list'

const ResourceIndex = ({data, location}) => {
  const posts = data.allMarkdownRemark.nodes.filter(post=>{return post.frontmatter.category === "Resources"})

  return (
    <main>
        <CategoryList location={location} data={data} posts={posts} category={"Resources"}/>
    </main>
    
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

export default ResourceIndex