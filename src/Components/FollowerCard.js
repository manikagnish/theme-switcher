import { StyledFollowerCard } from "./styles/FollowerCard.styled";
import { Flex } from "./styles/Flex.styled";

export default function FollowerCard({
  socialIcon,
  arrowIcon,
  username,
  followers,
  updates,
  color,
  smallClr,
}) {
  return (
    <StyledFollowerCard color={color} smallClr={smallClr}>
      <Flex direction="column">
        <Flex justify="center">
          {socialIcon}
          <p>{username}</p>
        </Flex>
        <h2>{followers}</h2>
        <span>followers</span>
        <small>
          {arrowIcon} {updates} Today
        </small>
      </Flex>
    </StyledFollowerCard>
  );
}
