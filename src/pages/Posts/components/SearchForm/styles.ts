import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin-bottom: 0.75rem;

    span {
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]}
    }
  }

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    padding: 0.75rem;
    background: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-label"]};

    &::placeholder {
      color: ${props => props.theme["base-label"]}
    }
  }
`