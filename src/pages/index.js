import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, useTheme } from "@material-ui/core"
import { H1, P, P2, H2 } from "../components/EasyText"
import HeroImage from "../components/HeroImage"
import Link from "../components/Link"
import TheTeam from "../components/Team"
import { makeStyles } from "@material-ui/styles"
import PageNavSidebar from "../components/PageSidebar"
import { CustomButton } from "../components/material/Button"

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

      <HeroImage />

      <PageNavSidebar
        menuItems={[
          { text: "Foreword", anchor: "#foreword" },
          { text: "Our Priorities", anchor: "#priorities" },
          { text: "The Team", anchor: "#the-team" },
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
        <section
          id="links"
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "space-evenly",
            justifyContent: "space-evenly",
            "& > *": {
              margin: theme.spacing(),
            },
          }}
        >
          <Link to="manifesto" className="no-underline">
            <CustomButton size="big">Manifesto</CustomButton>
          </Link>
          <Link to="why-us" className="no-underline">
            <CustomButton size="big">Why Us?</CustomButton>
          </Link>
        </section>

        <hr className="custom" />

        <section id="foreword">
          <H1 gutterBottom>Foreword</H1>
          <blockquote>
            <P paragraph style={{ fontWeight: 600 }}>
              This general election is a chance to deliver real change; change
              that no other party will bring. This is your opportunity to
              tranform our school, so that it works not just for a few, but for
              all of us. This manifesto sets out how a Big Dave government will
              deliver this.
            </P>
            <P paragraph>
              Some people say this is the Brexit election. But it's also the
              climate change election, the poverty election, the Africa by Toto
              election, the education election. But, above all, it's the change
              election.
            </P>
            <P paragraph>
              It is finally time to take back the political reigns from the
              privileged few that control our parliament, and bring that power
              back to the normal students, like you and I.
            </P>
            <P paragraph>
              I am not prepared to put up with students blighted by lack of
              investmemt, endless price increases to canteen food, and millions
              of sheets of paper being printed each year.
            </P>
            <P paragraph style={{ fontWeight: 600 }}>
              This is an election of change. And I plan to bring it.
            </P>
            <footer>
              <P2>{`- David "Big Dave" Wheatley`}</P2>
            </footer>
          </blockquote>
        </section>

        <hr className="custom" />

        <section id="priorities" className={classes.semiBoldStrongs}>
          <H1 gutterBottom>Our Priorities</H1>
          <P paragraph>
            Our campaign priorities are <strong>simple</strong>,{" "}
            <strong>effective</strong>, and <strong>unique</strong> to us.
          </P>
          <P paragraph>
            <ul>
              <li>
                Boost funding in the NHS, hire more staff, decrease A&E waiting
                times;
              </li>
              <li>
                Reform the education system, improve classroom standards,
                provide more teaching jobs;
              </li>
              <li>
                Invest in mental health improvement schemes, reflecting our
                country's changing needs;
              </li>
              <li>
                Reverse{" "}
                <Link to="priorities/austerity">
                  Conservative austerity measures
                </Link>
                ;
              </li>
              <li style={{ fontWeight: 900 }}>
                Redesign the country for the many, not the few;
              </li>
            </ul>
          </P>
          <P paragraph>
            For our full manifesto, extended descriptions, and explanations,
            read our <Link to="manifesto">manifesto & priorities page</Link>.
          </P>
        </section>

        <hr className="custom" />

        <section id="the-team">
          <H1 gutterBottom>The Team</H1>
          <TheTeam />
        </section>
      </Container>
    </Layout>
  )
}

export default IndexPage
