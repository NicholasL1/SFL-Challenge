import * as React from "react"
import Navbar from "./navbar"
import "../styles/header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <Navbar siteTitle={siteTitle} />
  </header>
)

export default Header
