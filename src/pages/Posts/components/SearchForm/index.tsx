import { useContext, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { PostsContext } from "../../../../contexts/PostsContext";
import { SearchFormContainer } from "./styles";
import * as z from "zod";

const searchFormSchema = z.object({
  query: z.string().optional()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    posts,
    searchGithubIssuesByQueryText
  } = useContext(PostsContext)

  const {
    register,
    control,
  } = useForm<SearchFormInputs>()

  const query = useWatch<SearchFormInputs, "query">({
    control,
    name: "query"
  })

  useEffect(() => {
    const queryTimeout = setTimeout(async () => {
      await searchGithubIssuesByQueryText(query)
    }, 500)

    return () => clearTimeout(queryTimeout)
  }, [query])

  const postsAmount = posts.length

  return (
    <SearchFormContainer>
      <header>
        <strong>Publicações</strong>
        <span>{postsAmount} publicações</span>
      </header>

      <input
        {...register('query')}
        type="text"
        placeholder="Buscar conteúdo"
      />

    </SearchFormContainer>
  )
}