import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { H3 } from "./Typography"
import Button from "./Button"
import Tag from "./Tag"

const BlogCardStyles = styled.article`
  margin: var(--margin, 0);
  border: 2px solid var(--grey-800);
  border-radius: var(--rounded-md);
  box-shadow: 2px 2px 0 var(--grey-800);
  padding: ${props => props.padding || "var(--spacing-8)"};
  background-color: ${props => props.backgroundColor || "transparent"};
  cursor: pointer;
  transition: 0.3s box-shadow ease, 0.3s border-color ease;

  a {
    color: var(--grey-050);
  }

  header {
    margin-bottom: var(--spacing-4);
  }

  .date {
    color: var(--grey-500);
    font-size: var(--fontSize-1);
    font-weight: var(--font-semibold);
    margin-top: var(--spacing-1);
  }

  p {
    font-weight: var(--font-medium);
    margin-bottom: var(--spacing-4);
    max-width: 20em;
  }

  &:hover {
    border-color: var(--grey-100);
    box-shadow: none;
  }

  @media (min-width: 425px) {
    p {
      max-width: 30em;
    }
  }
`

const BlogCardGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: start;
`

type BlogCardProps = {
  backgroundColor: string
  margin: string
  padding: string
  slug: string
  date: string
  description: string
  excerpt: string
  tags: string
  title: string
}

const BlogCard = ({
  backgroundColor,
  margin,
  padding,
  slug,
  date,
  description,
  excerpt,
  tags,
  title,
}: BlogCardProps) => {
  return (
    <BlogCardStyles
      backgroundColor={backgroundColor}
      margin={margin}
      padding={padding}
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
      style={{ "--margin": margin }}
    >
      <Link to={slug} itemProp="url">
        <BlogCardGrid>
          <header>
            {tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
            <H3>
              <span itemProp="headline">{title}</span>
            </H3>
            <div className="date">{date}</div>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: description || excerpt,
              }}
              itemProp="description"
            />
          </section>
          <Button>Read More</Button>
        </BlogCardGrid>
      </Link>
    </BlogCardStyles>
  )
}

export default BlogCard
