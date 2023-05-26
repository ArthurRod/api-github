import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  margin: 1rem auto;
  grid-template-columns: auto auto;
  gap: 0.8rem;
  padding: 0 1rem;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto;
    gap: 0.2rem;
    padding: 0 2rem 0 1rem;
  }
`;

export const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.container};
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  min-height: 2rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background ease-in-out 0.3s, transform ease-in-out 0.3s;
  padding: 0 1rem;

  &:hover,
  &.selected {
    background: ${(props) => props.color || props.theme.colors.light};
    color: ${(props) =>
      props.color ? props.theme.colors.white : props.theme.colors.black};
    transform: translateX(0) scale(1.02);
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    border-radius: 0px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    &:hover,
    &.selected {
      transform: translateX(5px) scale(1.02);
    }
  }
`;

export const Cleaner = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  border: none;
  text-align: center;
  padding: 0 1rem;
  transition: color ease-in-out 0.3s;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    text-align: left;
    padding: 1rem;
  }
`;
