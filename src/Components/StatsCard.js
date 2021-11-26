import { StyledStatsCard } from "./styles/StatsCard.styled";
import { Flex } from "./styles/Flex.styled";

export default function StatsCard({
  statName,
  socialIcon,
  count,
  arrowIcon,
  updates,
  color,
  smallClr,
}) {
  return (
    <StyledStatsCard color={color} smallClr={smallClr}>
      <Flex justify="space-between">
        <p>{statName}</p>
        {socialIcon}
      </Flex>
      <Flex justify="space-between">
        <h3>{count}</h3>
        <small>
          {arrowIcon} {updates}%
        </small>
      </Flex>
    </StyledStatsCard>
  );
}
