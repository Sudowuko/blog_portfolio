import * as React from 'react'
import { Link } from 'gatsby'
import {
    navLinks,
    navLinkItem
  } from './navbar.module.css'

const Navbar = ({ pageTitle, children }) => {
    return (
      <div>
        <h1>Blog and Portfolio</h1>
        <title>{pageTitle}</title>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to="/">Home</Link></li>
            <li className={navLinkItem}><Link to="/about">About Me</Link></li>
            <li className={navLinkItem}><Link to="/productivity">Productivity</Link></li>
            <li className={navLinkItem}><Link to="/resources">Resources</Link></li>
            <li className={navLinkItem}><Link to="/gratitude">Gratitude</Link></li>
          </ul>
        </nav>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </div>
    )
  }

  export default Navbar