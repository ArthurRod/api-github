import { Filter } from "./Filter";
import { Profile } from "./Profile";
import { Repositories } from "./Repositories";
import { Container, Main, Sidebar } from "./styles";

export function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}
