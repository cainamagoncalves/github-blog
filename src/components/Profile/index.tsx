import { ProfileContainer, ProfileContent, ProfileImage } from "./styles";
import logo from '../../assets/images/logo.svg'
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { FaBuilding, FaExternalLinkAlt, FaGithub, FaUserFriends } from "react-icons/fa";

interface GithubUserProps {
  avatar_url: string;
  followers: number;
  login: string;
  company: string;
  name: string;
  html_url: string;
}

export function Profile() {
  const [githubUser, setGithubUser] = useState<GithubUserProps>({} as GithubUserProps)


  async function searchGithub() {
    const { data } = await api.get(`/users/cainamagoncalves`)

    setGithubUser(data)
    console.log(data)
  }

  useEffect(() => {
    searchGithub()
  }, [])

  return (
    <ProfileContainer>
      <ProfileImage src={githubUser.avatar_url} alt="" />
      <ProfileContent>
        <header>
          <h2>{githubUser.name}</h2>
          <a href={githubUser.html_url} target="_blank">
            GITHUB
            <FaExternalLinkAlt />
          </a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas.
          Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </p>
        <footer>
          <span>
            <FaGithub />
            {githubUser.login}
          </span>
          <span>
            <FaBuilding />
            {githubUser.company}
          </span>
          <span>
            <FaUserFriends />
            {githubUser.followers} seguidores
          </span>
        </footer>
      </ProfileContent>
    </ProfileContainer>
  )
}