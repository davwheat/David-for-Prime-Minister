import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Container, useTheme } from "@material-ui/core"

import { H1, P, P2, H2 } from "../../components/EasyText"
import HeroImage from "../../components/HeroImage"
import PageNavSidebar from "../../components/PageSidebar"
import GoBack from "../../components/ToHome"
import StatisticsBoxes from "../../components/material/StatisticsBoxes"
import { blue } from "@material-ui/core/colors"

const IndexPage = () => {
  const theme = useTheme()

  return (
    <Layout>
      <SEO title="NHS" />

      <HeroImage
        customImg={require("../../images/priorities/nhs/doctors-and-nurses.jpg")}
        customQuote={`The NHS needs more funding, and we will deliver it.`}
      />

      <PageNavSidebar
        menuItems={[
          { text: "Introduction", anchor: "#introduction" },
          { text: "Strained Staff", anchor: "#jobs" },
          { text: "Upgraded Technology", anchor: "#technology" },
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
        <GoBack oneUpUrl={`/manifesto`} />

        <section id="introduction">
          <H1 gutterBottom>An NHS for the present, and the future</H1>
          <P paragraph style={{ fontWeight: 600 }}>
            Since 2006, our NHS has been becoming increasingly privatised, with,
            on average, a yearly increase of 0.5% of the NHS's budget being
            spent on commissioning healthcare from private providers. It isn't
            just the Conservatives, the usual group people complain about, but
            also Labour.
          </P>
          <img
            style={{
              margin: "24px auto",
              display: "block",
              minWidth: 200,
              maxWidth: "100%",
              width: "max-content",
            }}
            alt="Line graph showing increasing percentages of the NHS's budget being used for services outsourced to private providers"
            src={require("../../images/priorities/nhs/privatisation.png")}
          />
          <P paragraph>
            The NHS is one of the most critical and valued public services in
            the UK, which many other countries' residents envy. The NHS was
            designed by us, for us: it needs to stay this way.
          </P>
          <blockquote>
            <P paragraph style={{ fontWeight: 600 }}>
              I guarantee that the percentage of the NHS's budget spent on
              outsourcing healthcare to private providers will more than half
              back to 3% by 2024.
            </P>
            <footer>
              <P2>{`- David "Big Dave" Wheatley`}</P2>
            </footer>
          </blockquote>
        </section>

        <StatisticsBoxes
          baseColor={blue[600]}
          stats={[
            {
              figure: ">10,000",
              caption: "more permanent NHS staff by 2022",
            },
            {
              figure: "£3 billion",
              caption: "extra funding for NHS by end of 2020",
            },
            {
              figure: "£650 million",
              caption: "investment in new technology for the NHS",
            },
          ]}
        />

        <section id="jobs">
          <H2 gutterBottom>Strained Staff</H2>
          <P paragraph>
            Figures from NHS Digital revealed that in 2018, NHS staff took
            almost 100,000 more days off of work due to stress and anxiety than
            they did in 2013. One doctor even stated that "driving off the road
            at 70mph seemed like a genuinely better alternative than actually
            going into the ward and doing your job." This is unacceptable.
          </P>
          <P paragraph>
            Despite employing over 1.5 million workers, the NHS doesn't have
            enough staff to meet current demand, with over 94,000 full-time
            vacancies being advertised for hospital cand community services
            alone between July and September, equating to a employee shortfall
            of around 8%.
          </P>
          <img
            style={{
              margin: "24px auto",
              display: "block",
              minWidth: 200,
              maxWidth: "100%",
              width: "max-content",
            }}
            alt="Bar graph showing the distribution of NHS vacancies across the UK."
            src={require("../../images/priorities/nhs/vacancies.png")}
          />
          <P paragraph>
            This lack of workers creates extreme pressure on those who are
            employed in the NHS, having to work overtime or complete multiple
            jobs to make up for this. Some of this gap is filled by untrained,
            temporary workers which eat into the health service's budget,
            consuming over £5.6 billion (compared to a planned £5 billion) in
            2018/19.
          </P>
          <P paragraph style={{ fontWeight: 600 }}>
            I can guarantee that we will employ more than 10000 additional
            permanent NHS staff by 2022.
          </P>
        </section>

        <hr className="custom" />

        <section id="technology">
          <H2 gutterBottom>Upgraded Technology</H2>
          <P paragraph>
            Figures from NHS Digital revealed that in 2018, NHS staff took
            almost 100,000 more days off of work due to stress and anxiety than
            they did in 2013. One doctor even stated that "driving off the road
            at 70mph seemed like a genuinely better alternative than actually
            going into the ward and doing your job." This is unacceptable.
          </P>
          <P paragraph>
            Despite employing over 1.5 million workers, the NHS doesn't have
            enough staff to meet current demand, with over 94,000 full-time
            vacancies being advertised for hospital cand community services
            alone between July and September, equating to a employee shortfall
            of around 8%.
          </P>
          <img
            style={{
              margin: "24px auto",
              display: "block",
              minWidth: 200,
              maxWidth: "100%",
              width: "max-content",
            }}
            alt="Bar graph showing the distribution of NHS vacancies across the UK."
            src={require("../../images/priorities/nhs/vacancies.png")}
          />
          <P paragraph>
            This lack of workers creates extreme pressure on those who are
            employed in the NHS, having to work overtime or complete multiple
            jobs to make up for this. Some of this gap is filled by untrained,
            temporary workers which eat into the health service's budget,
            consuming over £5.6 billion (compared to a planned £5 billion) in
            2018/19.
          </P>
          <P paragraph style={{ fontWeight: 600 }}>
            I can guarantee that we will employ more than 10000 additional
            permanent NHS staff by 2022.
          </P>
        </section>

        <GoBack oneUpUrl={`/manifesto`} />
      </Container>
    </Layout>
  )
}

export default IndexPage
