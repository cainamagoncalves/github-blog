import styled from "styled-components";

export const PostsContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 0 1.5rem;

  main {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr)
    }
  }
`