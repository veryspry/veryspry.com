import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import classnames from "classnames"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import {
  leftJustifiedText,
  centeredHorizontalFlex,
  roundImage,
  fullParentWidth,
  marginHorizontalSmall,
} from "../styles/style.css"

function Link({ children, href, className = '' }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={className}
    >
      {children}
    </a>
  )
}

function IndexPage() {
  return (
    <Layout>
      <Seo title="Loading..." />
      <StaticImage
        src="../images/cover.jpg"
        width={300}
        height={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
        className={roundImage}
      />
      <div className={centeredHorizontalFlex}>
        <Link href="https://github.com/veryspry" className={marginHorizontalSmall}>
          <StaticImage
            src="../images/github.png"
            quality={100}
            width={32}
            alt="Matt Ehlinger\'s Github Profile"
          />
        </Link>
        <Link href="https://instagram.com/veryspry" className={marginHorizontalSmall}>
          <StaticImage
            src="../images/instagram.png"
            alt="Matt Ehlinger's; Instagram Profile"
            width={32}
          />
        </Link>
        <Link href="https://twitter.com/veryspry" className={marginHorizontalSmall}>
          <StaticImage
            src="../images/twitter.png"
            alt="Matt Ehlinger\'s Twitter Profile"
            width={32}
          />
        </Link>
      </div>
      <br />
      <h1 className={classnames(leftJustifiedText, fullParentWidth)}>
        Hi 👋 Matt Ehlinger here.
      </h1>
      <p className={leftJustifiedText}>
        I’m a Software Engineer and as you do, I build things!
        <br />
        <br />
        I'm currently working on <Link href="https://gatsbyjs.com">Gatsby Cloud</Link>, hosting for <Link href="https://github.com/gatsbyjs/gatsby">Gatsby</Link> sites. I make sure that the Gatsby Cloud API’s and backend services integrate seamlessly with our partner CMS backends and the Gatsby Cloud frontend
        <br />
        <br />
        At previous startups, I worked on <Link href="https://localwp.com">Local</Link> where I helped to build a paid product offering and at <Link href="https://groundbreaker.co/">Groundbreaker</Link> where I helped crush a ground up software rebuild with a 4 person engineering team.
        <br />
        <br />
      </p>
    </Layout>
  )
}

export default IndexPage
