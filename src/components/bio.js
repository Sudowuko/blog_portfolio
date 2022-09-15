/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
        const data = useStaticQuery(graphql `
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
            email
            phone
            github
          }
        }
      }
    }
  `)

        // Set these values by editing "siteMetadata" in gatsby-config.js
        const author = data.site.siteMetadata?.author
        const social = data.site.siteMetadata?.social

        return (
          <div className="bio">
            <StaticImage
              className="bio-avatar"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/profile-pic.JPG"
              width={50}
              height={50}
              quality={95}
              alt="Profile picture"
            />
            {author?.name && (
              <p>
                {author?.summary || null}
                {`Feel free to follow me on `}
                <a href={`https://www.linkedin.com/in/${social?.linkedin}`}>
                  Linkedin 
                </a>
                {' and '}
                <a href={`https://www.github.com/${social.github}`}>
                 Github
                </a>
               {' '} or reach out through {' '}
                <a href = "mailto: j2nicola@uwaterloo.ca">
                  email.
                  </a>
              </p>
            )}
          </div>
        )
      }

export default Bio