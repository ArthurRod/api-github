import styled from "styled-components";

export const Loading = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-weight: bold;
  font-size: 2rem;
`;

export const NotFound = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-weight: bold;
  font-size: 2rem;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.background};
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    width: 20rem;
    min-height: 100vh;
  }
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.container};
  width: 100%;
  padding: 40px 20px;
  min-height: 100vh;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: calc(100% - 20rem);
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px;
  }
`;
