import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../lib/axios";
import { PostTextViewer, PostViewContainer } from "./styles";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PostViewInfo } from "./components/PostViewInfo";
import { PostsContext } from "../../contexts/PostsContext";
import { useParams } from "react-router-dom";
import { compareDistanceToNow } from "../../utils/formatter";
import { format, formatDistanceToNow } from "date-fns";
import { ClipLoader } from "react-spinners";

interface Post {
  title: string;
  comments: number;
  html_url: string;
  body: string;
  number: number;
  created_at: string;
}

export function PostView() {
  const [post, setPost] = useState<Post>({} as Post)

  const { searchGithubIssueById, isQueryingPost } = useContext(PostsContext)

  const { number } = useParams()

  async function searchGithubIssue() {
    const searchedPost = await searchGithubIssueById(Number(number))

    if (searchedPost) {
      setPost(searchedPost)
    }
  }

  useEffect(() => {
    searchGithubIssue()
  }, [])

  return (
    <div>
      <Header />
      <PostViewInfo
        title={post.title}
        postUrl={post.html_url}
        commentsAmmount={post.comments}
        postDate={post.created_at}
      />
      <PostViewContainer>
        {isQueryingPost ? (
          <ClipLoader
            color="#fff"
            loading={isQueryingPost}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <PostTextViewer remarkPlugins={[remarkGfm]}>{post.body}</PostTextViewer>
        )}
      </PostViewContainer>
    </div>
  )
}