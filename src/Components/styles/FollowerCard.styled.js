import styled from "styled-components";

export const StyledFollowerCard = styled.div`
  width: 250px;
  background: var(--clr-bg-card-light);
  padding: 1em;
  border-radius: 5px;
  border-top: 4px solid ${({ color }) => color};
  color: var(--clr-text-blue-light);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 1em;

  &:hover {
    background-color: hsl(227, 47%, 90%);
  }

  svg {
    color: ${({ color }) => color};
    height: 1.5em;
    width: 1.5em;
  }

  p {
    margin-left: 7px;
    font-weight: bold;
  }

  h2 {
    font-weight: bold;
    font-size: 50px;
    margin-top: 20px;
  }

  span {
    color: var(--clr-text-gray-light);
    text-transform: uppercase;
    letter-spacing: 3px;
    display: inline-block;
    margin-bottom: 20px;
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
