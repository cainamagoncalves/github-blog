import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostViewInfoContainer = styled.section`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  margin-top: -5rem;
  background: ${props => props.theme["base-profile"]};
  border-radius: 6px;
  filter: drop-shadow(0 2px 1.75rem rgba(0, 0, 0, 0.2));

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      color: ${props => props.theme.blue};
      text-decoration: none;
    }
  }

  main {
    margin-top: 1.25rem;

    h1 {
      font-size: 1.5rem;
      text-align: left;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    margin-top: 0.5rem;
  }
`

export const CustomRouteButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;


  text-decoration: none;
  color: ${props => props.theme.blue}
`