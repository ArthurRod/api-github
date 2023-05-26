import {
  Users,
  SuitcaseSimple,
  Buildings,
  LinkSimpleHorizontal,
} from "phosphor-react";

import { Container, Avatar, Header, Login, Name, Inner, Data } from "./styles";

export function Profile() {
  return (
    <Container>
      <Header>
        <Avatar
          src="https://avatars.githubusercontent.com/u/62612459?v=4"
          alt="Arthur Rodrigues"
        />
        <Login>ArthurRod</Login>
        <Name>Arthur Rodrigues</Name>
      </Header>
      <Inner>
        <Data>
          <Users size={20} />
          18&nbsp;<i>Seguidores</i>&nbsp;&middot;&nbsp;23&nbsp;<i>Seguindo</i>
        </Data>
        <Data>
          <SuitcaseSimple size={20} />
          @SiriusDigitalAgencia
        </Data>
        <Data>
          <Buildings size={20} />
          Sete Lagoas, Minas Gerais
        </Data>
        <Data>
          <LinkSimpleHorizontal size={20} />
          <a href="https://devsamurai.com.br" target="_blank">
            devsamurai.com.br
          </a>
        </Data>
      </Inner>
    </Container>
  );
}
