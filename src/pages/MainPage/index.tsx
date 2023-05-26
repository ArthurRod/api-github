import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

import { Button, Container, Form, Input, Logo, Title } from "./styles";
import githubLogo from "../../assets/svg/github-logo.svg";

export function MainPage() {
  const [login, setLogin] = useState("");

  return (
    <Container>
      <Logo src={githubLogo} alt="Logo GitHub" />
      <Title>API GitHub</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Button to={`${login}/repositories`}>
          <MagnifyingGlass size={42} />
        </Button>
      </Form>
    </Container>
  );
}
