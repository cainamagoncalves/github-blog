import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { PostsContext } from "../../contexts/PostsContext";
import { PostCard } from "./components/PostCard";
import { SearchForm } from "./components/SearchForm";
import { PostsContainer } from "./styles";
import ClipLoader from "react-spinners/ClipLoader"

export function Posts() {

  const { posts, isQueryingPosts } = useContext(PostsContext)

  return (
    <div>
      <Header />
      <Profile />
      <PostsContainer>
        <SearchForm />

        <main>
          {isQueryingPosts ? (
            <ClipLoader
              color="#fff"
              loading={isQueryingPosts}
              size={25}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            posts.map(post => {
              return (
                <PostCard
                  key={post.number}
                  text={post.body}
                  postTitle={post.title}
                  postDate={post.created_at}
                  postNumber={post.number}
                />
              )
            })
          )}
        </main>
      </PostsContainer>
    </div>
  )
}