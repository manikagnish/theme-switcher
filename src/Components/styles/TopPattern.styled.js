import styled from "styled-components";

export const StyledTopPattern = styled.div`
  height: 230px;
  width: 100vw;
  background-color: ${(props) => props.theme.topPatternClr};
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
