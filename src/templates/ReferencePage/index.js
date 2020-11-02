import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { FaArrowLeft } from 'react-icons/fa'
import Image from 'gatsby-image'
import SEO from '~/components/seo'

const ReferenzenTemplate = ({
  data: {
    post: {
      title,
      content,
      featuredImage: { fluid },
      seoBeschreibung,
    },
  },
}) => {
  return (
    <>
      <SEO title={title} description={seoBeschreibung || 'Referenzen'} />
      <section>
        <h1 title={title} />
        <article>
          <Image fluid={fluid} alt={title} />
        </article>
        <article>
          <MDXProvider>
            <MDXRenderer>{content.childMdx.body}</MDXRenderer>
          </MDXProvider>
        </article>
        <Link to="/referenzen">
          <FaArrowLeft
            style={{ verticalAlign: 'middle', marginRight: '0.5em' }}
            size="1em"
          />
          &nbsp;Zur Übersicht
        </Link>
      </section>
    </>
  )
}

export const query = graphql`
  query GetBlogPost($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      content {
        childMdx {
          body
        }
      }
      featuredImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      seoBeschreibung
    }
  }
`

export default ReferenzenTemplate
