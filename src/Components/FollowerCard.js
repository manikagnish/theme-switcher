import { StyledFollowerCard } from "./styles/FollowerCard.styled";
import { Flex } from "./styles/Flex.styled";

export default function FollowerCard({
  socialIcon,
  arrowIcon,
  username,
  followers,
  updates,
}) {
  return (
    <StyledFollowerCard>
      <div></div>
      <Flex justify="center">
        {socialIcon}
        <p>{username}</p>
      </Flex>
      <h2>{followers}</h2>
      <span>followers</span>
      <small>
        {arrowIcon} {updates} Today
      </small>
    </StyledFollowerCard>
  );
}
