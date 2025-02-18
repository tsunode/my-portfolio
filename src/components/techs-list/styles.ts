import styled from "styled-components";

export const TechsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;

  & > h3 {
    color: ${(props) => props.theme.colors["blue-700"]};
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 43px;
  }
  .tech-list {
    display: flex;
    flex-direction: row;
    column-gap: 50px;
    row-gap: 20px;
    flex-wrap: wrap;
    justify-content: center;

    .tech-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 10px;
      width: 70px;
      height: 100px;
      & > h4 {
        text-align: center;
        color: ${(props) => props.theme.colors["blue-700"]};
        font-size: 1rem;
        line-height: 24px;
        height: 48px;
        display: flex;
        align-items: center;
      }
      & > svg {
        fill: ${(props) => props.theme.colors["blue-500"]};
        width: 40px;
        height: 40px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    padding-top: 100px;
    .tech-list {
      justify-content: flex-start;
      .tech-item {
        & > svg {
          fill: ${(props) => props.theme.colors["blue-500"]};
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`;
