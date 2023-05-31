import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getLangsFrom, getRepos, getUser } from "../../services/api";
import { RepositoryType } from "../../types/RepositoryType";
import { User } from "../../types/User";
import { Language } from "../../types/Language";
import { Filter } from "./Filter";
import { Profile } from "./Profile";
import { Repositories } from "./Repositories";

import { Container, Loading, NotFound, Main, Sidebar } from "./styles";

export function RepositoriesPage() {
  const { login } = useParams();

  const [user, setUser] = useState<User | undefined>();
  const [repositories, setRepositories] = useState<
    RepositoryType[] | undefined
  >();
  const [languages, setLanguages] = useState<Language[] | undefined>();
  const [loading, setLoading] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>();

  useEffect(() => {
    const loadData = async () => {
      if (login) {
        setLoading(true);

        const [userResponse, repositoriesReponse] = await Promise.all([
          getUser(login),
          getRepos(login),
        ]);

        if (userResponse) {
          setUser(userResponse);
        }

        if (repositoriesReponse) {
          setRepositories(repositoriesReponse);
          setLanguages(getLangsFrom(repositoriesReponse));
        }

        setLoading(false);
      }
    };

    loadData();
  }, []);

  const onFilterClick = (language: string | undefined) => {
    setCurrentLanguage(language);
  };

  if (loading) return <Loading>Carregando...</Loading>;

  if (!user) return <NotFound>Usuário não encontrado!</NotFound>;

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        {languages && languages.length > 0 && (
          <Filter
            languages={languages}
            currentLanguage={currentLanguage}
            onclick={onFilterClick}
          />
        )}
      </Sidebar>
      <Main>
        {repositories && repositories.length > 0 && (
          <Repositories
            repositories={repositories}
            currentLanguage={currentLanguage}
          />
        )}
      </Main>
    </Container>
  );
}
