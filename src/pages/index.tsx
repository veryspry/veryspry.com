import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import {
  leftJustifiedText,
  mainContentMaxWidth,
} from "../styles/style.css"

const Link = ({ children, href }) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
  
)

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
    <p className={leftJustifiedText}>
      Hi! Matt Ehlinger here. I’m a Software Engineer and as you do, I build things!
      <br />
      <br />
      I'm currently working on <Link href="https://gatsbyjs.com">Gatsby Cloud</Link>, hosting for <Link href="https://github.com/gatsbyjs/gatsby">Gatsby</Link> sites. I make sure that the Gatsby Cloud API’s and backend services integrate seamlessly with our partner CMS backends and the Gatsby Cloud frontend
      <br />
      <br />
      At previous startups, I worked on <Link href="https://localwp.com">Local</Link> where I helped to build a paid product offering and at <Link href="https://groundbreaker.co/">Groundbreaker</Link> where I helped crush a ground up software rebuild with a 4 person engineering team.
    </p>
  </Layout>
)

export default IndexPage
