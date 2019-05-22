import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import BackgroundSection from '../components/global/BackgroundSection'
import { GiClaymoreExplosive } from 'react-icons/gi'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Big Time Coffee"
      styleClass="default-background"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

export default IndexPage
