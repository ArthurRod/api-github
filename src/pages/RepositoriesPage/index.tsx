import { useState } from "react";
import { getLangsFrom } from "../../services/api";
import { RepositoryType } from "../../types/RepositoryType";
import { User } from "../../types/User";
import { Filter } from "./Filter";
import { Profile } from "./Profile";
import { Repositories } from "./Repositories";
import { Container, Main, Sidebar } from "./styles";

export function RepositoriesPage() {
  const [currentLanguage, setCurrentLanguage] = useState<string>();

  const user: User = {
    login: "ArthurRod",
    name: "Arthur Rodrigues",
    avatar_url: "https://avatars.githubusercontent.com/u/62612459?v=4",
    followers: 18,
    following: 23,
    company: "@SiriusDigitalAgencia ",
    location: "Sete Lagoas, Minas Gerais",
  };

  const repositories: RepositoryType[] = [
    {
      id: 1,
      name: "Repo 1",
      description: "Description",
      html_url: "#",
      language: "TypeScript",
    },
    {
      id: 2,
      name: "Repo 2",
      description: "Description",
      html_url: "#",
      language: "TypeScript",
    },
    {
      id: 3,
      name: "Repo 3",
      description: "Description",
      html_url: "#",
      language: "TypeScript",
    },
    {
      id: 4,
      name: "Repo 4",
      description: "Description",
      html_url: "#",
      language: "JavaScript",
    },
    {
      id: 5,
      name: "Repo 5",
      description: "Description",
      html_url: "#",
      language: "JavaScript",
    },
    {
      id: 6,
      name: "Repo 6",
      description: "Description",
      html_url: "#",
      language: "JAVA",
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language: string | undefined) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onclick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
}
