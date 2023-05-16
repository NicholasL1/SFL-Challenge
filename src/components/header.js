import * as React from "react"
import Navbar from "./navbar"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar siteTitle={siteTitle} />
  </header>
)

export default Header
