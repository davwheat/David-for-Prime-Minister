import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import { Container, useTheme } from '@material-ui/core'

import { H1, P, P2, H2 } from '../../components/EasyText'
import HeroImage from '../../components/HeroImage'
import PageNavSidebar from '../../components/PageSidebar'
import GoBack from '../../components/ToHome'
import StatisticsBoxes from '../../components/material/StatisticsBoxes'
import { green, red } from '@material-ui/core/colors'

const IndexPage = () => {
  const theme = useTheme()

  return (
    <Layout>
      <SEO title="Education" />

      <HeroImage customImg="education/classroom.jpg" customQuote={`Every child has the right to an excellent education.`} />

      <PageNavSidebar
        menuItems={[
          { text: 'Introduction', anchor: '#introduction' },
          { text: 'A Redesigned Education System', anchor: '#new-system' },
          { text: 'Increased Funding', anchor: '#manifesto' },
          { text: 'More Teaching Jobs', anchor: '#teachers' },
          { text: 'Better Classroom Standards', anchor: '#discipline' },
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
          <H1 gutterBottom>Investing in Schools</H1>
          <P paragraph style={{ fontWeight: 600 }}>
            School funding is at an all-time low in the UK. The Conservative government has promised countless times to boost investment in
            primary & secondary schools, yet this still hasn't happened.
          </P>
          <P paragraph>
            Other than the Big Dave Political Party, the only other party that promises to increase funding in schools this general election is
            Labour. The Liberal Democrats have vowed to reset the funding back to the levels in 2015, and Conservative plans leave almost all
            schools still heavily underfunded.
          </P>
          <blockquote>
            <P paragraph style={{ fontWeight: 600 }}>
              I guarantee we will inject an additional £16 billion into public education.
            </P>
            <footer>
              <P2>{`- David "Big Dave" Wheatley`}</P2>
            </footer>
          </blockquote>
        </section>

        <StatisticsBoxes
          baseColor={green[600]}
          stats={[
            {
              figure: '£16 billion',
              caption: 'investment in schools nationwide',
            },
            {
              figure: '>1%',
              caption: 'of schools underfunded by 2022',
            },
            {
              figure: '5000',
              caption: 'new teaching-related jobs by 2021',
            },
          ]}
        />

        <section id="new-system">
          <H2 gutterBottom>A Redesigned Education System</H2>
          <P paragraph>
            GCSEs were introduced in 1988 - 31 years ago from today, and 19 years before the first iPhone was released. They were introduced
            before the modern internet, and computers, and most technology. They were designed for an older society, unlike ours today. And they
            need to be updated.
          </P>
          <P paragraph>
            Students today face a multitude of different scenarios and issues which noone could have foreseen in 1988, such as social media
            "perfectionists". Countless students feel pressured into succeeding and achieving above a grade 9 (A* equivalent), even when it is
            almost impossible for them to gain a grade 6.
          </P>
          <P paragraph>
            Many senior school leaders, the NSPCC, and Childline are concerned that the new format GCSEs are far too stressful and are leading to
            teenage mental health crises. In 2016, the average GCSE student sat 18 exams at a total of 24 hours 30 minutes. Contrastingly, in
            2019 the same student would sit 22 exams totalling 33 hours.{' '}
            <strong>These 33 hours, at age 16, are what defines young peoples' lives nowadays.</strong>
          </P>
          <P paragraph style={{ fontWeight: 600 }}>
            I can guarantee that we will overhaul our education system, bringing it up-to-day with modern culture and technology, redefine the
            national curriculum, and invest in mental health support for young people.
          </P>
        </section>

        <StatisticsBoxes
          baseColor={red[600]}
          stats={[
            {
              figure: '35%',
              caption: 'more time spent in exams compared to 2016',
            },
            {
              figure: '25%',
              caption: 'more exam papers sat compared to 2016',
            },
            {
              figure: '86%',
              caption: 'of headteachers say their students have panic attacks',
            },
          ]}
        />

        <section id="funding">
          <H2 gutterBottom>Increased Funding</H2>
          <P paragraph>
            Due to inflation, the original 2015 funding levels are not sufficient to provide a word-class standard of education that this
            country, and its children, deserve. An analysis by the School Cuts coalition found that &ldquo;more than 80% of schools will have
            less funding per pupil in 2020 than they did in 2015&rdquo; with a Conservative government.
          </P>
          <P paragraph>
            This is why we are proposing an extraordinary funding increase for the education sector. Starting with the most underfunded areas, we
            will increase monetary investment in primary and secondary education.
          </P>
          <P paragraph style={{ fontWeight: 600 }}>
            I can guarantee that each primary school will receive at least £3500 per pupil, and each secondary school will receive at least £4500
            per pupil, meaning that all students across the country will have the resources and materials they need for a superior education.
          </P>
        </section>

        <hr className="custom" />

        <section id="teachers">
          <H2 gutterBottom>More Teaching Jobs</H2>
          <blockquote>
            <P paragraph style={{ fontWeight: 500 }}>
              Dear Gavin Williamson, teachers ask children to 'tell the truth'. Voters would like the same from the Tories
            </P>
            <footer>
              <P2>- Michael Rosen</P2>
            </footer>
          </blockquote>
          <P paragraph>
            Each year, fewer and fewer people are choosing teaching as a career, whether it be due to the terrible starting salary, the lack of
            support from the government or local authorities, or a range of other factors.
          </P>
          <P paragraph>
            In England, the average age of a teacher is 39 years old, compared with other countries where their average age is 44. However, only
            18% of teachers stay in the profession in England after the age of 50, with an average of 34% elsewhere.
          </P>
          <P paragraph>
            The latest survey showed that many teachers working hours have got longer since the previous survey in 2013, from 48 to more than 49
            hours a week for secondary school teachers. Primary school teachers in England recorded working 52 hours a week, longer than their
            peers in other countries apart from Japan.
          </P>
          <P paragraph>
            These are all signs of a demoralised workforce, caused by those in power in our parliament across the past 6 years. This amplifies
            the requirement for change: change in our country, change in education, change in power.
          </P>
          <P paragraph style={{ fontWeight: 600 }}>
            I can guarantee that all teachers' starting salaries will be increased to at least £29000 by 2023, delivering a more motivated
            teaching workforce, benefitting both teaching staff and children's education alike.
          </P>
        </section>

        <hr className="custom" />

        <section id="discipline">
          <H2 gutterBottom>Better Classroom Standards</H2>
          <P paragraph>
            In recent years, England has risen in the international literacy league tables. But will a Conservative government allow these
            standards to continue rising? Likely not.
          </P>
          <P paragraph>
            The latest survey showed that many teachers working hours have got longer since the previous survey in 2013, from 48 to more than 49
            hours a week for secondary school teachers. Primary school teachers in England recorded working 52 hours a week, longer than their
            peers in other countries apart from Japan.
          </P>
          <P paragraph style={{ fontWeight: 600 }}>
            I guarantee that all schools - even those rated as 'outstanding' - will receive annual inspections to ensure that parents, teachers,
            and children can be confident that the younger population are receiving the excellent education which they deserve.
          </P>
        </section>

        <GoBack oneUpUrl={`/manifesto`} />
      </Container>
    </Layout>
  )
}

export default IndexPage
