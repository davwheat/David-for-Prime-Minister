import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { H1, P } from "../components/EasyText"
import GoBack from "../components/ToHome"
import HeroImage from "../components/HeroImage"

import { Container, useTheme } from "@material-ui/core"

const NotFoundPage = () => {
  const theme = useTheme()

  return (
    <Layout>
      <SEO title="404: Not found" />

      <HeroImage />

      <Container
        maxWidth="md"
        style={{ paddingTop: theme.spacing(4), borderRadius: 8, marginTop: -4 }}
      >
        <GoBack oneUpUrl={`/`} />

        <H1 gutterBottom>Error 404</H1>
        <P paragraph>This page doesn't exist.</P>

        <GoBack oneUpUrl={`/`} />
      </Container>
    </Layout>
  )
}

export default NotFoundPage
