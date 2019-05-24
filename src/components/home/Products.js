import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Product from './Product'
import Title from '../global/Title'

const GET_PRODUCTS_QUERY = graphql`
  {
    dryGoods: allContentfulNonDrinks {
      edges {
        node {
          id
          name
          description {
            description
          }
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Products = () => {
  return (
    <StaticQuery
      query={GET_PRODUCTS_QUERY}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Mercantile" />
              <div className="row">
                {data.dryGoods.edges.map(({ node: product }) => (
                  <Product key="product.id" product={product} />
                ))}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

export default Products
