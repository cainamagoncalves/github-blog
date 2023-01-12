import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.theme["base-profile"]};
  padding: 1.875rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 2.875rem
  }
`