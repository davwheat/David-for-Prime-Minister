import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Container, useTheme, makeStyles } from "@material-ui/core"

import { H1, P, P2, H2 } from "../../components/EasyText"
import HeroImage from "../../components/HeroImage"
import PageNavSidebar from "../../components/PageSidebar"
import ToHome from "../../components/ToHome"
import TripleStatsBox from "../../components/material/TripleStatsBox"
import { green } from "@material-ui/core/colors"

const useStyles = makeStyles(() => ({
  semiBoldStrongs: {
    "& strong": {
      fontWeight: 600,
    },
  },
}))

const IndexPage = () => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />

      <HeroImage
        customImg={require("../../images/priorities/education/classroom.jpg")}
        customQuote={`Every child has the right to an excellent education.`}
      />

      <PageNavSidebar
        menuItems={[
          { text: "Introduction", anchor: "#introduction" },
          { text: "Increased Funding", anchor: "#manifesto" },
          { text: "More Teaching Jobs", anchor: "#teachers" },
        ]}
      />

      <Container
        maxWidth="md"
        style={{
          paddingTop: theme.spacing(4),
          borderRadius: 8,
          marginTop: -4,
        }}
      >
        <section id="introduction">
          <H1 gutterBottom>Investing in Schools</H1>
          <P paragraph style={{ fontWeight: 600 }}>
            School funding is at an all-time low in the UK. The Conservative
            government has promised countless times to boost investment in
            primary & secondary schools, yet this still hasn't happened.
          </P>
          <P paragraph>
            Other than the Big Dave Political Party, the only other party that
            promises to increase funding in schools this general election is
            Labour. The Liberal Democrats have vowed to reset the funding back
            to the levels in 2015, and Conservative plans leave almost all
            schools still heavily underfunded.
          </P>
          <blockquote>
            <P paragraph style={{ fontWeight: 600 }}>
              I guarantee we will inject an additional £16 billion into public
              education.
            </P>
            <footer>
              <P2>{`- David "Big Dave" Wheatley`}</P2>
            </footer>
          </blockquote>
        </section>

        <TripleStatsBox
          baseColor={green[600]}
          stats={[
            {
              figure: "£16 billion",
              caption: "investment in schools nationwide",
            },
            {
              figure: ">1%",
              caption: "of schools underfunded by 2022",
            },
            {
              figure: "5000",
              caption: "new teaching-related jobs by 2021",
            },
          ]}
        />

        <section id="funding">
          <H2 gutterBottom>Increased Funding</H2>
          <P paragraph>
            Due to inflation, the original 2015 funding levels are not
            sufficient to provide a word-class standard of education that this
            country, and its children, deserve. An analysis by the School Cuts
            coalition found that &ldquo;more than 80% of schools will have less
            funding per pupil in 2020 than they did in 2015&rdquo; with a
            Conservative government.
          </P>
          <P paragraph>
            This is why we are proposing an extraordinary funding increase for
            the education sector. Starting with the most underfunded areas, we
            will increase monetary investment in primary and secondary
            education.
          </P>
          <P paragraph>
            Each primary school will receive at least £3500 per pupil, meanwhile
            each secondary school will receive at least £4500 per pupil, meaning
            that all students across the country will have the resources and
            materials they need for a superior education.
          </P>
        </section>

        <section id="teachers">
          <H2 gutterBottom>More Teaching Jobs</H2>
          <P paragraph>
            Due to inflation, the original 2015 funding levels are not
            sufficient to provide a word-class standard of education that this
            country, and its children, deserve. An analysis by the School Cuts
            coalition found that &ldquo;more than 80% of schools will have less
            funding per pupil in 2020 than they did in 2015&rdquo; with a
            Conservative government.
          </P>
          <P paragraph>
            This is why we are proposing an extraordinary funding increase for
            the education sector. Starting with the most underfunded areas, we
            will increase monetary investment in primary and secondary
            education.
          </P>
          <P paragraph>
            Each primary school will receive at least £3500 per pupil, meanwhile
            each secondary school will receive at least £4500 per pupil, meaning
            that all students across the country will have the resources and
            materials they need for a superior education.
          </P>
        </section>

        <ToHome />
      </Container>
    </Layout>
  )
}

export default IndexPage
