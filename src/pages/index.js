import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import BackgroundSection from '../components/global/BackgroundSection'
import Info from '../components/home/Info'
import Menu from '../components/home/Menu'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Big Time Coffee"
        styleClass="default-background"
      />
      <Menu menu={data.menu} />
      <Info />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    menu: allContentfulDrinks {
      edges {
        node {
          id
          name
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          special
          description {
            description
          }
        }
      }
    }
  }
`

export default IndexPage
