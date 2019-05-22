import React from 'react'
import { Link } from 'gatsby'
import Title from '../global/Title'

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque voluptate in dolorem rem consequuntur officiis
              voluptatibus commodi aperiam labore voluptates! Deserunt,
              repellendus facere. Atque eos at sequi est sunt commodi modi
              facere inventore veniam mollitia, saepe, eius praesentium itaque?
              Numquam vel ut eveniet soluta veniam quisquam, eius aperiam
              officia sit.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
