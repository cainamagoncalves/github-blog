import { ProfileContainer, ProfileContent, ProfileImage } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { FaBuilding, FaExternalLinkAlt, FaGithub, FaUserFriends } from "react-icons/fa";
import { InfoCardIcon } from "../InfoCardIcon";

interface GithubUserProps {
  avatar_url: string;
  followers: number;
  bio: string;
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
          {githubUser.bio}
        </p>
        <footer>
          <InfoCardIcon icon={<FaGithub size={18} />} description={githubUser.login} />
          <InfoCardIcon icon={<FaBuilding size={18} />} description={githubUser.company} />
          <InfoCardIcon icon={<FaUserFriends size={18} />} description={String(githubUser.followers) + ' seguidores'} />
        </footer>
      </ProfileContent>
    </ProfileContainer>
  )
}