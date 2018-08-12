import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Emoji_u1f951.svg/2000px-Emoji_u1f951.svg.png" width="30" /></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)

export default Header
