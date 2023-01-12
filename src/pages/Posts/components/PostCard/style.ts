import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PostCardContainer = styled(NavLink)`
  text-decoration: none;

  display: flex;
  flex-direction: column;
  padding: 2rem;
  
  gap: 1.25rem;
  border-radius: 6px;
  background: ${props => props.theme["base-post"]};

  border: 4px solid transparent;

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
  transition: border 0.3s;
  
  &:hover {
    border: 4px solid ${props => props.theme["base-border"]};
  }
`

export const PostCardText = styled(ReactMarkdown)`
  max-height: 7rem;
  display: -webkit-box;
  overflow: hidden;
  color: ${props => props.theme["base-text"]};

  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`