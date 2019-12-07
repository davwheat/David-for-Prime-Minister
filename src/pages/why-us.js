import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, useTheme } from "@material-ui/core"
import { H1, P, P2, H4, H2, H3 } from "../components/EasyText"
import HeroImage from "../components/HeroImage"
import ToHome from "../components/ToHome"
import PageNavSidebar from "../components/PageSidebar"

import { Player } from "video-react"
import "video-react/dist/video-react.css" // import css

const ManifestoPage = () => {
  const theme = useTheme()

  return (
    <Layout>
      <SEO title="Why Us?" />

      <HeroImage />

      <PageNavSidebar
        menuItems={[
          { text: "Who Are We?", anchor: "#about" },
          { text: "Vote Boris Gone-son", anchor: "#boris-goneson" },
        ]}
      />

      <Container
        maxWidth="md"
        style={{ paddingTop: theme.spacing(4), borderRadius: 8, marginTop: -4 }}
      >
        <ToHome />

        <section id="about">
          <H1 gutterBottom>Who Are We?</H1>
          <P paragraph style={{ fontWeight: 600 }}>
            The Big Dave political party was designed to bring power back to the
            people of Britain and away from the reckless and power-hungry
            leaders we currently have.
          </P>
          <P paragraph>
            The Conservatives have spent their time in parliament fussing and
            faffing over a futile Brexit deal, meanwhile the public have been
            becoming more and more restless and tired of the news articles, the
            backwards progress, the endless negotiating and extension. You want
            Brexit to end. We want Brexit to end. Together, we can make it
            happen.
          </P>
          <P paragraph style={{ fontWeight: 600 }}>
            We want to make Britain ours.
          </P>
        </section>

        <hr className="custom" />

        <section id="boris-goneson">
          <H3 gutterBottom component="p" align="center">
            Boris Johnson should be Boris Gone-son.
          </H3>
          <P paragraph>
            Boris Johnson has been ducking the public since his first day in
            office until this general election: avoiding debates until after
            postal votes have been sent; ignoring questions about his personal
            life; avoiding campaigning in front of the public.
          </P>

          <H4 gutterBottom>Boris Johnson Diss Track</H4>
          <Player
            playsInline
            poster={require("../images/boris/boris-thumbs-up.jpg")}
            src={require("../images/boris/boris-johnson-diss.mp4")}
          />
          <br />
        </section>
        <ToHome />
      </Container>
    </Layout>
  )
}

export default ManifestoPage
