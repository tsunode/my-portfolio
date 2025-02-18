import styled from "styled-components";

export const CenterContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  height: 70px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1450px) {
  }
`;
export const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin-left: 0 auto;
  padding: 0 20px;

  z-index: 999;
  & > div > svg path {
    fill: ${(props) => props.theme.colors["text"]};
  }
  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    height: 70px;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: ${(props) => props.theme.colors["blue-200"]};
    border-bottom: 1px solid;

    border-color: ${(props) => props.theme.colors["blue-250"]};
  }
  #logo {
  }
  & > nav {
    display: flex;
    flex-direction: row;
    gap: 25px;
    a {
      font-weight: 600;
      font-size: 1.1rem;
      :hover {
        text-decoration: none;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    nav {
      gap: 60px;
    }
  }
`;

export const ContainerTheme = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media screen and (min-width: 1024px) {
    gap: 60px;
  }
`;

export const ButtonMenu = styled.button`
  width: 32px;
  height: 28px;
  & > svg {
    width: 100%;
    height: 100%;
    fill: ${(props) => props.theme.colors.text};
  }
`;
