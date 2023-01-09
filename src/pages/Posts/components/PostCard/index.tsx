import { PostCardContainer } from "./style";

interface PostCardProps {
  text: string;
}

export function PostCard({ text }: PostCardProps) {
  return (
    <PostCardContainer>
      <header>
        <strong>
          JavaScript data types and data structures
        </strong>
        <span>Há 1 dia</span>
      </header>
      <p>
        {text}
      </p>
    </PostCardContainer>
  )
}