import styled from "styled-components";

export const StyledStatsCard = styled.div`
  width: 250px;
  background: ${(props) => props.theme.cardBg};
  padding: 1em;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 1em;

  &:hover {
    background-color: ${(props) => props.theme.cardBgHover};
  }

  div:first-child {
    margin-bottom: 2em;
  }

  p {
    font-weight: bold;
    color: ${(props) => props.theme.statTypeClr};
  }

  svg {
    color: ${({ color }) => color};
    height: 1.5em;
    width: 1.5em;
  }

  h3 {
    font-size: 30px;
    color: ${(props) => props.theme.countClr};
  }

  small {
    font-weight: bold;
    color: ${({ smallClr }) => smallClr};
    display: flex;
    align-items: center;
    svg {
      color: ${({ smallClr }) => smallClr};
    }
  }
`;
