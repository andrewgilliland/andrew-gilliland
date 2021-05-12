import styled from "styled-components"

export const CenterContentStyles = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  height: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--spacing-5);

  @media (min-width: 769px) {
    padding: 0;
  }
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: var(--spacing-8);
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, calc(100% - 64px)) // calc function prevents horizontal scroll
    1fr;
  // substitution for padding
  grid-column-gap: 32px;

  & > * {
    grid-column: 2;
  }
`
