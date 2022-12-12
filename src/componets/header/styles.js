import styled from "styled-components";
import {
  buttonSize,
  containerStyle,
  hoverEffect,
} from "../../styles/styleConstants";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: transparent;
`;

const Container = styled.div`
  ${containerStyle}
  .mobile-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 990px) {
      display: none;
    }

    button {
      ${buttonSize}
      font-size: 1.5rem;
    }

    h1 {
      font-size: 1.875rem;
      font-weight: 600;
    }

    div {
      a {
        ${hoverEffect}
      }
    }
  }
  .nav {
    display: none;
    align-items: center;
    justify-content: space-between;
    display: none;
    @media screen and (min-width: 990px) {
      display: flex;
      /* align-items: center;
      justify-content: space-between; */
    }

    .left-wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;

      h1 {
        font-size: 2rem;
        font-weight: 600;
      }
    }

    ul {
      display: flex;
      gap: 1rem;
      font-size: 1.25rem;
    }

    li a {
      ${hoverEffect}
    }

    button {
      ${buttonSize}
      transform: translateY(2px);
      font-size: 1.25rem;
    }
  }
`;

export { Container, StyledHeader };
