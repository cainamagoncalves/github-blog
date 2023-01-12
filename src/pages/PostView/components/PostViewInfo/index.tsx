import { FaCalendarDay, FaChevronLeft, FaComment, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { InfoCardIcon } from "../../../../components/InfoCardIcon";
import { compareDistanceToNow } from "../../../../utils/formatter";
import { CustomRouteButton, PostViewInfoContainer } from "./styles";

interface PostViewInfoProps {
  title: string;
  postUrl: string;
  commentsAmmount: number;
  postDate: string;
}

export function PostViewInfo({
  title,
  postUrl,
  commentsAmmount,
  postDate
}: PostViewInfoProps) {
  return (
    <PostViewInfoContainer>
      <header>
        <CustomRouteButton to="/">
          <FaChevronLeft />
          Voltar
        </CustomRouteButton>
        <a href={postUrl} target="`_blank">
          VER NO GITHUB
          <FaExternalLinkAlt />
        </a>
      </header>

      <main>
        <h1>{title}</h1>
      </main>

      <footer>
        <InfoCardIcon icon={<FaGithub size={18} />} description='cainamagoncalves' />
        <InfoCardIcon icon={<FaCalendarDay size={18} />} description={postDate} />
        <InfoCardIcon icon={<FaComment size={18} />} description={commentsAmmount + ' comentários'} />
      </footer>

    </PostViewInfoContainer>
  )
}