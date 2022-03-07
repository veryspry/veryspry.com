import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import {
  centerText,
  mainContentMaxWidth,
} from "../styles/style.css"

const bioText = `Hi! Matt Ehlinger here. I’m a Staff Software Engineer currently working on Gatsby Cloud hosting for Gatsby sites. I make sure that Gatsby’s API’s and backend services work seamlessly with the Gatsby Cloud frontend and seamlessly integrate with our partner CMS backends.`

const IndexPage = () => (
  <Layout>
    <Seo title="Hello, Matt here!" />
    <StaticImage
      src="../images/cover.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p className={centerText}>
      {bioText}
    </p>
  </Layout>
)

export default IndexPage
