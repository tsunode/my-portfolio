import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;

  #about__description {
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.text};
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 80px;
  }
`;

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  #about__hello,
  #about__dev {
    font-size: 1.875rem;
    font-weight: 700;

    color: ${(props) => props.theme.colors["blue-700"]};
  }
  #about__name {
    font-size: 4rem;
    color: ${(props) => props.theme.colors["blue-gradient"]};
    font-weight: 700;
    background: linear-gradient(
      ${(props) => props.theme.colors["blue-gradient"]}
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const IconsContainer = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  svg {
    width: 33px;
    height: 100%;
    fill: ${(props) => props.theme.colors["blue-500"]};
  }
`;

export const PhotoContainer = styled.div`
  position: relative;
  min-width: 200px;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  @media screen and (min-width: 768px) {
    min-width: 340px;
    width: 340px;
    height: 340px;
    /* align-self: auto; */
  }
`;

export const Ellipse = styled.div`
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(99, 143, 174, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;