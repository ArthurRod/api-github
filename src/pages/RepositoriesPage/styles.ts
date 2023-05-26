import styled from "styled-components";

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
  height: 100vh;
  overflow-y: hidden;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    width: 20rem;
  }
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.container};
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 40px 20px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: calc(100% - 20rem);
    height: 100vh;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px;
  }
`;
