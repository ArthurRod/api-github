import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  align-items: center;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin-right: 1rem;
  margin-bottom: 0px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70%;
    height: auto;
    margin-right: 0px;
    margin-bottom: 1rem;
  }
`;

export const Login = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.subtitle};
  font-weight: normal;
  display: none;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
  }
`;

export const Inner = styled.div`
  padding: 1rem 0;
  display: none;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;

  svg {
    margin-right: 10px;
  }
`;
