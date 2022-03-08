import * as React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import {
  centeredVerticalFlex,
  fullViewHeight,
  mainContentMaxWidth,
  fullParentWidth,
  smallPadding,
} from "../styles/style.css"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div
      className={classnames(
        centeredVerticalFlex,
        fullViewHeight,
        mainContentMaxWidth,
        smallPadding,
      )}
    >
      <main
        className={classnames(fullParentWidth, centeredVerticalFlex)}
      >{children}</main>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Matt Ehlinger.
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
