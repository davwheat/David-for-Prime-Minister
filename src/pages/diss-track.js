import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, useTheme } from "@material-ui/core"
import { H1, P, H4, H3 } from "../components/EasyText"
import HeroImage from "../components/HeroImage"
import GoBack from "../components/ToHome"
import PageNavSidebar from "../components/PageSidebar"

import { Player } from "video-react"
import "video-react/dist/video-react.css" // import css

const ManifestoPage = () => {
  const theme = useTheme()

  return (
    <Layout>
      <SEO title="Johnson Diss Track" />

      <HeroImage
        customImg={require("../images/boris/banner.jpg")}
        customQuote={`Vote Boris Gone-son!`}
        customAlt={`Black and white image of Boris Johnson looking scared on a red background.`}
      />

      <Container
        maxWidth="md"
        style={{ paddingTop: theme.spacing(4), borderRadius: 8, marginTop: -4 }}
      >
        <GoBack oneUpUrl={`/`} />

        <section id="goneson">
          <H1 gutterBottom>The Boris Johnson Diss Track</H1>
          <Player
            playsInline
            poster={require("../images/boris/boris-thumbs-up.jpg")}
            src={require("../images/boris/boris-johnson-diss.mp4")}
          />
          <br />
        </section>

        <GoBack oneUpUrl={`/`} />
      </Container>
    </Layout>
  )
}

export default ManifestoPage
