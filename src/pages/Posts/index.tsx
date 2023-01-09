import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { PostCard } from "./components/PostCard";
import { SearchForm } from "./components/SearchForm";
import { PostsContainer } from "./styles";

export function Posts() {
  return (
    <div>
      <Header />
      <Profile />
      <PostsContainer>
        <SearchForm />

        <main>
          <PostCard text="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have.
        These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn."/>
          <PostCard text="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have." />
        </main>
      </PostsContainer>
    </div>
  )
}