import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: wrap;
`;
