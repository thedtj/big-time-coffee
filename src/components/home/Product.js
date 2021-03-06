import React from 'react'
import Img from 'gatsby-image'

const Product = ({ product }) => {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: '100%' }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{product.name}</h6>
          <h6>${product.price}</h6>
          <p className="text-muted">
            <small>{product.description.description}</small>
          </p>
          <button
            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
            data-item-id={product.id}
            data-item-name={product.name}
            data-item-price={product.price}
            data-item-url="https://bigtimecoffee.netlify.com"
            data-item-description={product.description.description}
            data-item-image={product.image.fluid.src}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
