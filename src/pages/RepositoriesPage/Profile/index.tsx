import {
  Users,
  SuitcaseSimple,
  Buildings,
  LinkSimpleHorizontal,
} from "phosphor-react";

import { User } from "../../../types/User";

import { Container, Avatar, Header, Login, Name, Inner, Data } from "./styles";

interface ProfileProps {
  user: User;
}

export function Profile({ user }: ProfileProps) {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} alt={user.name} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <Users size={20} />
          {user.followers}&nbsp;<i>Seguidores</i>&nbsp;&middot;&nbsp;
          {user.following}&nbsp;<i>Seguindo</i>
        </Data>
        {user.company && (
          <Data>
            <SuitcaseSimple size={20} />
            {user.company}
          </Data>
        )}
        {user.location && (
          <Data>
            <Buildings size={20} />
            {user.location}
          </Data>
        )}
        {user.blog && (
          <Data>
            <LinkSimpleHorizontal size={20} />
            <a href={`\\${user.blog}`} target="_blank">
              {user.blog}
            </a>
          </Data>
        )}
      </Inner>
    </Container>
  );
}
