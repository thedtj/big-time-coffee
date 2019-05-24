import React, { useState, setState } from 'react'
import Title from '../global/Title'
import Img from 'gatsby-image'

const getCategories = fullMenu => {
  const tempItems = fullMenu.map(fullMenu => {
    return fullMenu.node.category
  })
  const tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ['all', ...categories]
  return categories
}

const Menu = ({ menu }) => {
  const [fullMenu, setFullMenu] = useState(menu.edges)
  const [displayMenu, setDisplaymenu] = useState(fullMenu)
  const [categories, setCategories] = useState(getCategories(menu.edges))

  const handleItems = category => {
    category === 'all'
      ? setDisplaymenu(fullMenu)
      : setDisplaymenu(
          fullMenu.filter(({ node }) => node.category === category)
        )
  }
  return fullMenu.length > 0 ? (
    <section className="menu py-5">
      <div className="container">
        <Title title="Our Menu" />
        {/* categories */}
        <div className="row mb-5">
          <div className="col-10 mx-auto text-center">
            {categories.map((category, index) => (
              <button
                type="button"
                key={index}
                className="btn btn-yellow text-capitalize m-3"
                onClick={() => {
                  handleItems(category)
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* fullMenu */}
        <div className="row mb-5">
          {displayMenu.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="col-11 col-md-6 my-3 d-flex mx-auto"
              >
                <div>
                  <Img fixed={node.image.fixed} />
                </div>
                {/* item text */}
                <div className="flex-grow-1 px-3">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0 ">{node.name}</h6>
                    <h6 className="mb-0 text-yellow">${node.price}</h6>
                  </div>
                  <p className="text-muted">
                    <small>{node.description.description}</small>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  ) : (
    <section className="menu py-5">
      <div className="container">
        <Title title="Our Menu" />
        <div className="row">
          <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
            <h1>Oopsy do. Looks like all our drinks have gone missing.</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
