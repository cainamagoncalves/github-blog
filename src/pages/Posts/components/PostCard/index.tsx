import remarkGfm from "remark-gfm";
import { PostCardContainer, PostCardText } from "./style";

interface PostCardProps {
  text: string;
  postTitle: string;
  postDate: string;
  postNumber: number;
}

export function PostCard({ text, postTitle, postDate, postNumber }: PostCardProps) {

  return (
    <PostCardContainer to={`/detail/${postNumber}`}>
      <header>
        <strong>
          {postTitle}
        </strong>
        <span>{postDate}</span>
      </header>
      <PostCardText remarkPlugins={[remarkGfm]}>
        {text}
      </PostCardText>
    </PostCardContainer >
  )
}