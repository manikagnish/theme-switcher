import styled from "styled-components";

export const StyledNavbar = styled.nav`
  padding: 3em 0;
  font-weight: bold;
  color: ${(props) => props.theme.statTypeClr};

  h1 {
    color: ${(props) => props.theme.navClr};
    font-size: 26px;
  }

  span {
    color: ${(props) => props.theme.navClr};
    padding-right: 10px;
  }

  @media (max-width: 600px) {
    div {
      align-items: flex-start;
    }
    div:nth-of-type(2) {
      align-items: center;
      border-top: 0.5px solid var(--clr-text-blue-dark);
      padding-top: 1em;
      width: 100%;
      margin-top: 1em;
    }
  }
`;
