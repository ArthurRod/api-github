import { Container, Description, Footer, Lang, Name, Link } from "./styles";

export function Repository() {
  return (
    <Container color="#f37272">
      <Name>Repository Name</Name>
      <Description>Repository Description</Description>
      <Footer color="#f37272">
        <Lang>Repository lang</Lang>
        <Link href="#" target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
}
