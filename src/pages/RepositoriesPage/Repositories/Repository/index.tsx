import { langColors } from "../../../../services/config";
import { RepositoryType } from "../../../../types/RepositoryType";

import { Container, Description, Footer, Lang, Name, Link } from "./styles";

interface RepositoryProps {
  repository: RepositoryType;
}

export function Repository({ repository }: RepositoryProps) {
  const color = () => {
    if (repository.language) {
      return langColors[
        repository.language.toLowerCase() as keyof typeof langColors
      ];
    }

    return "#fff";
  };

  return (
    <Container color={color()}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color()}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
}
