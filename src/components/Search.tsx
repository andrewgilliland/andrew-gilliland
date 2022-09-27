import React, { useState } from "react"
import styled from "styled-components"

export const SearchStyles = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;

  h2 {
    color: var(--purple-vivid-600);
    font-size: 28px;
  }

  form {
    margin-left: 1em;
  }

  input {
    background-color: var(--grey-1000);
    border: 2px solid var(--purple-vivid-800);
    border-radius: var(--rounded-md);
    color: var(--grey-100);
    padding: 0.5em;
  }
`

export default function Search({ posts }) {
  const [query, setQuery] = useState()

  function handleOnSearch(event) {
    const value = event.currentTarget.value
    setQuery(value)

    console.log(value)
  }

  if (query) {
    posts = posts.filter(({ title }) => {
      return title.toLowerCase().includes(query.toLowerCase())
    })
  }

  return (
    <SearchStyles>
      <h2>Search</h2>
      <form>
        <input onChange={handleOnSearch} type="search" />
      </form>
    </SearchStyles>
  )
}
