import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Container, useTheme } from "@material-ui/core"

import { H1, P, P2, H2 } from "../../components/EasyText"
import HeroImage from "../../components/HeroImage"
import PageNavSidebar from "../../components/PageSidebar"
import ToHome from "../../components/ToHome"
import StatisticsBoxes from "../../components/material/StatisticsBoxes"
import { blue } from "@material-ui/core/colors"

const IndexPage = () => {
  const theme = useTheme()

  return (
    <Layout>
      <SEO title="Austerity Reversal" />

      <HeroImage
        customImg={require("../../images/priorities/austerity/protest.jpg")}
        customQuote={`The NHS needs more funding, and we will deliver it.`}
        customAlt="Image of people at UK anti-austerity protest holding picket signs"
      />

      <PageNavSidebar
        menuItems={[{ text: "Introduction", anchor: "#introduction" }]}
      />

      <Container
        maxWidth="md"
        style={{
          paddingTop: theme.spacing(4),
          borderRadius: 8,
          marginTop: -4,
        }}
      >
        <ToHome />

        <section id="introduction">
          <H1 gutterBottom>Work in Progress</H1>
          <P paragraph style={{ fontWeight: 600 }}>
            You've found one of our pages that's still being worked on! Pop back
            in a few days time to see what we've got then.
          </P>
        </section>

        <ToHome />
      </Container>
    </Layout>
  )
}

export default IndexPage
