import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import { Container, useTheme } from '@material-ui/core'

import { H1, P } from '../../components/EasyText'
import HeroImage from '../../components/HeroImage'
import PageNavSidebar from '../../components/PageSidebar'
import GoBack from '../../components/ToHome'

const IndexPage = () => {
  const theme = useTheme()

  return (
    <Layout>
      <SEO title="Austerity Reversal" />

      <HeroImage
        customImg="austerity/protest.jpg"
        customQuote={`The NHS needs more funding, and we will deliver it.`}
        customAlt="Image of people at UK anti-austerity protest holding picket signs"
      />

      <PageNavSidebar menuItems={[{ text: 'Introduction', anchor: '#introduction' }]} />

      <Container
        maxWidth="md"
        style={{
          paddingTop: theme.spacing(4),
          borderRadius: 8,
          marginTop: -4,
        }}
      >
        <GoBack oneUpUrl={`/manifesto`} />

        <section id="introduction">
          <H1 gutterBottom>Work in Progress</H1>
          <P paragraph style={{ fontWeight: 600 }}>
            You've found one of our pages that's still being worked on! Pop back in a few days time to see what we've got then.
          </P>
        </section>

        <GoBack oneUpUrl={`/manifesto`} />
      </Container>
    </Layout>
  )
}

export default IndexPage
