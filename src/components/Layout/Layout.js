import styled from "styled-components"

export const ComingSoonStyles = styled.section`
  height: 55vh;
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
