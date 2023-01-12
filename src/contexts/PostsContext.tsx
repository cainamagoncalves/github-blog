import { formatDistanceToNow } from "date-fns";
import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { compareDistanceToNow } from "../utils/formatter";

interface PostsProviderProps {
  children: ReactNode;
}

interface Post {
  html_url: string;
  title: string;
  comments: number;
  body: string;
  number: number;
  created_at: string;
}

interface QueryData {
  items: Post[];
}

interface PostsContextProps {
  posts: Post[];
  isQueryingPosts: boolean;
  isQueryingPost: boolean;
  searchGithubIssueById: (number: number) => Promise<Post | undefined>
  searchGithubIssuesByQueryText: (query?: string) => Promise<any>
}

export const PostsContext = createContext<PostsContextProps>({} as PostsContextProps)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [isQueryingPosts, setIsQueryingPosts] = useState(false)
  const [isQueryingPost, setIsQueryingPost] = useState(false)

  const searchGithubIssueById = useCallback(async (id: number) => {
    setIsQueryingPost(true)

    try {
      const { data } = await api.get<Post>(`/repos/cainamagoncalves/github-blog/issues/${id}`)

      const {
        html_url,
        title,
        number,
        comments,
        body,
        created_at
      } = data

      const post = {
        html_url,
        title,
        number,
        comments,
        body,
        created_at: compareDistanceToNow(created_at)
      }

      return post;
    } catch (error) {
      console.log(error)
    } finally {
      console.log("Promise finalizada!")
      setIsQueryingPost(false)
    }
  }, [])

  const searchGithubIssuesByQueryText = useCallback(async (query?: string) => {
    setIsQueryingPosts(true)

    try {
      const { data } = await api.get<QueryData>(`/search/issues?q=${query ? query : ""}%20repo:cainamagoncalves/github-blog`)

      const { items } = data

      const posts = items.map(d => {
        return {
          ...d,
          created_at: compareDistanceToNow(d.created_at)
        }
      })

      setPosts(posts)
    } catch (error) {
      console.log(error)
    } finally {
      console.log("Finished")
      setIsQueryingPosts(false)
    }
  }, [])

  return (
    <PostsContext.Provider value={{
      posts,
      searchGithubIssueById,
      searchGithubIssuesByQueryText,
      isQueryingPosts,
      isQueryingPost
    }}
    >
      {children}
    </PostsContext.Provider>
  )
}
