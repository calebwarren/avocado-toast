import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="heroGroup">
        <h1>Avocado toast</h1>
        <p>Your favorite vegetable and favorite bread are here for you.
        </p>
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
