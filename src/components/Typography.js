import styled from "styled-components"

export const H1 = styled.h1`
  color: var(--grey-050);
  letter-spacing: var(--tracking-wide);
  text-shadow: 2px 2px 0 var(--pink-vivid-500);
  margin-bottom: var(--spacing-8);
`
export const H2 = styled.h2`
  color: var(--purple-vivid-400);
  font-size: 15px;
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: var(--spacing-6);
`

export const H3 = styled.h3`
  color: var(--grey-050);
  font-size: var(--fontSize-3);
  font-weight: var(--font-bold);
  transition: all 0.3s ease;
`

export const H4 = styled.h4`
  color: var(--blue-050);
  font-size: 24px;
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--spacing-8);
`

export const Copy = styled.p`
  font-size: 18px;
  letter-spacing: 0.2px;
`

export const UL = styled.ul`
  margin-top: 1rem;
  list-style: disc;

  li {
    font-size: 18px;
    margin-top: 0.5rem;
    padding-left: 0.1rem;
  }

  li::marker {
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--pink-vivid-500);
    font-size: 1.5rem;
  }
`

export const BlendCopy = styled.p`
  font-size: 2.25rem;
  font-weight: 600;
  min-width: 50px;
  background-image: linear-gradient(to bottom, #8719e0, #0967d2);
  background-attachment: fixed;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`