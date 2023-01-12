import ReactMarkdown from "react-markdown";
import styled from "styled-components";

export const PostViewContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const PostTextViewer = styled(ReactMarkdown)`
  width: 100%;
  white-space: pre-wrap;
`