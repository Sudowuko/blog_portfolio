import * as React from "react"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
       <small>© Joseph Nicolas {new Date().getFullYear()}, Built with</small> 
        {` `}
       <small> <a href="https://www.gatsbyjs.com">Gatsby</a></small> 
      </footer>
    </div>
  )
}

export default Layout
