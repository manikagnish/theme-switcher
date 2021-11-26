import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: wrap;
`;

export const FlexCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
