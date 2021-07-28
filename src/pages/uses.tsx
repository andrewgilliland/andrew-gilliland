import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper } from "../components/Layout/Layout"
import { H1, H2, Copy, UL, BlendCopy } from "../components/Typography"

const AboutPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout title="Uses" location={location}>
      <SEO title="Uses" />

      <Wrapper>
        <H1>Uses</H1>
        <Copy>
          This is a list of hardware and software I use in my day to day life as
          a web developer.
        </Copy>
        <div>
          <H2>Hardware</H2>
          <UL>
            <li>
              Dell Inspiron 7373 - 💻 - A 2-in-1 laptop I use only as a laptop, but
              it's nice to know I can use it as a tablet.
            </li>
            <li>
              iPhone SE(1st generation) - 📱 - Yes, the original iPhone SE! Why get a
              new one when this one works.
            </li>
            <li>
              Casio F91W-1 Casual Sport Watch - ⌚ - A sport watch that has these features
              included: tells the time, a button to make it glow, and it does
              not link to any other devices
            </li>
          </UL>
          <H2>Development Tools</H2>
          <UL>
            <li>Visual Studio Code -  ⌨️ - Thank Microsoft for this awesome code editor!</li>
            <li>Chrome - 🖥️ - My browser of choice for development. Sometimes I switch it up to Firefox.</li>
            <li>Hyper - ⚡ - The current command terminal I enjoy using.</li>
          </UL>
          <H2>Apps</H2>
          <UL>
            <li>Figma - 🎨 - When I need to whip together a design.</li>
            <li>Spotify - 🎵 - For music and podcasts!</li>
            <li>Audible - 📚 - My audiobook app of choice.</li>
            <li>Notion - 📝 - My note-taking app of choice.</li>
          </UL>
        </div>
        <BlendCopy>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, inventore eligendi nesciunt fugit, distinctio tempore, in voluptate cupiditate excepturi atque nihil delectus recusandae assumenda sed quo magni aut ad voluptatem modi? Culpa, inventore. Tenetur laudantium provident nulla velit distinctio ducimus aliquid explicabo eius atque officiis? Dignissimos tenetur iusto minima corrupti.
        </BlendCopy>
      </Wrapper>
    </Layout>
  )
}

export default AboutPage
