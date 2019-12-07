import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, useTheme } from "@material-ui/core"
import { H1, P, P2 } from "../components/EasyText"
import HeroImage from "../components/HeroImage"
import ToHome from "../components/ToHome"
import PageNavSidebar from "../components/PageSidebar"
import Link from "../components/Link"
import { CustomButton } from "../components/material/Button"

const ManifestoPage = () => {
  const theme = useTheme()

  return (
    <Layout>
      <SEO title="Manifesto" />

      <HeroImage />

      <PageNavSidebar
        menuItems={[
          { text: "Manifesto", anchor: "#manifesto" },
          { text: "The Team", anchor: "#the-team" },
        ]}
      />

      <Container
        maxWidth="md"
        style={{ paddingTop: theme.spacing(4), borderRadius: 8, marginTop: -4 }}
      >
        <ToHome />
        <section id="manifesto">
          <H1 gutterBottom>Campaign Promises</H1>
          <P paragraph>
            Our campaign promises are <strong>simple</strong>,{" "}
            <strong>effective</strong>, and <strong>unique</strong> to us.
          </P>

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
            <Link to="priorities/nhs" className="no-underline">
              <CustomButton size="big">NHS</CustomButton>
            </Link>
            <Link to="priorities/education" className="no-underline">
              <CustomButton size="big">Education</CustomButton>
            </Link>
          </section>

          <P>We will...</P>
          <P paragraph>
            <ul style={{ marginTop: 4 }}>
              <li>
                conduct a <strong>second EU referendum</strong> to follow the
                latest will of the people;
              </li>
              <li>
                introduce legislation to{" "}
                <strong>aid mental health services</strong>;
              </li>
              <li>
                <strong>
                  not increase the rates of VAT, National Insurance, or income
                  tax
                </strong>
                ;
              </li>
              <li>
                reform the National Curriculum and the{" "}
                <strong>UK education system</strong>;
              </li>
              <li>
                <strong>remove tax loopholes</strong> currently exploited by the
                rich;
              </li>
              <li>
                invest an extra <strong>£30 billion</strong> into the{" "}
                <strong>NHS</strong>;
              </li>
              <li>
                boost <strong>school</strong> funding by{" "}
                <strong>£16 billion</strong>;
              </li>
            </ul>
          </P>
          <P2 paragraph>
            <sup>1</sup> assuming 30 sheets of paper for 3 classes per day, and
            10 faculties, totalling approximately 14.7 metric tonnes, or 97
            trees
          </P2>
        </section>
        <ToHome />
      </Container>
    </Layout>
  )
}

export default ManifestoPage
