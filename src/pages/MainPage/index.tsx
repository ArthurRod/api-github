import { Container } from "./styles";

import githubLogo from "../../assets/svg/github-logo.svg";

export function MainPage() {
  return (
    <Container>
      <img src={githubLogo} alt="Logo GitHub" />
    </Container>
  );
}
