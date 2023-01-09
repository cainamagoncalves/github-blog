import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  
  gap: 1.25rem;
  border-radius: 6px;
  background: ${props => props.theme["base-post"]};

  p {
    max-height: 7rem;
    display: -webkit-box;
    overflow: hidden;

    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    strong {
      max-width: 17.65rem;
      font-size: 1.25rem;
      color: ${props => props.theme["base-title"]}
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]}
    }
  }

`