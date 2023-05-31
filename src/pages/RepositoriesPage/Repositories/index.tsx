import { RepositoryType } from "../../../types/RepositoryType";
import { Repository } from "./Repository";

import { Container } from "./styles";

interface RepositoriesProps {
  repositories: RepositoryType[];
  currentLanguage?: string;
}

export function Repositories({
  repositories,
  currentLanguage,
}: RepositoriesProps) {
  const repos = repositories
    .filter(
      (repository: RepositoryType) =>
        currentLanguage === undefined || repository.language === currentLanguage
    )
    .map((repository: RepositoryType) => (
      <Repository key={repository.id} repository={repository} />
    ));

  return <Container>{repos}</Container>;
}
