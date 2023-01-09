import styled from "styled-components";

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  margin-top: -5rem;
  background: ${props => props.theme["base-profile"]};
  border-radius: 6px;
  filter: drop-shadow(0 2px 1.75rem rgba(0, 0, 0, 0.2));

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`

export const ProfileContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      text-decoration: none;
      color: ${props => props.theme["blue"]}
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 1.5rem;
    margin-top: 1rem;
    
    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }    
  }

  @media (max-width: 768px) {
    p {
      text-align: center;
    }

    footer {
      flex-direction: column;
    }
  }
`

export const ProfileImage = styled.img`
  max-width: 148px;
  border-radius: 6px;
`