import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Button from "./Button"

const H4 = styled.h4`
  color: var(--grey-050);
  font-size: var(--fontSize-3);
  font-weight: var(--fontWeight-bold);
  transition: all 0.3s ease;
`

const BlogCardStyles = styled.article`
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "var(--spacing-10)"};
  background-color: ${props => props.backgroundColor || "transparent"};
  border-radius: var(--rounded-lg);
  cursor: pointer;

  a {
    color: var(--grey-050);
  }

  header {
    margin-bottom: var(--spacing-4);
  }

  h4 {
    margin-bottom: var(--spacing-2);
  }

  small {
    color: var(--grey-500);
    font-size: var(--fontSize-1);
    font-weight: var(--fontWeight-semibold);
    margin: 0;
  }

  p {
    font-weight: var(--fontWeight-medium);
    margin-bottom: var(--spacing-4);
    max-width: 20em;
  }

  &:hover {
    h4 {
      color: var(--pink-vivid-500);
    }
  }

  @media (min-width: 425px) {
    p {
      max-width: 30em;
    }
  }
`

const BlogCard = ({
  backgroundColor,
  margin,
  padding,
  slug,
  date,
  description,
  excerpt,
  title,
}) => {
  return (
    <BlogCardStyles
      backgroundColor={backgroundColor}
      margin={margin}
      padding={padding}
      key={slug}
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
    >
      <Link to={slug} itemProp="url">
        <header>
          <H4>
            <span itemProp="headline">{title}</span>
          </H4>
          <small>{date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: description || excerpt,
            }}
            itemProp="description"
          />
          <Button>Read More</Button>
        </section>
      </Link>
    </BlogCardStyles>
  )
}

export default BlogCard