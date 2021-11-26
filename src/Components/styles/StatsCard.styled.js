import styled from "styled-components";

export const StyledStatsCard = styled.div`
  width: 250px;
  background: var(--clr-bg-card-light);
  padding: 1em;
  border-radius: 5px;
  color: var(--clr-text-blue-light);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 1em;

  &:hover {
    background-color: hsl(227, 47%, 90%);
  }

  div:first-child {
    margin-bottom: 2em;
  }

  p {
    font-weight: bold;
    color: var(--clr-text-gray-light);
  }

  svg {
    color: ${({ color }) => color};
    height: 1.5em;
    width: 1.5em;
  }

  h3 {
    font-size: 30px;
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
