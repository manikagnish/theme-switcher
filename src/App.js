import FollowerCard from "./Components/FollowerCard";
import StatsCard from "./Components/StatsCard";
import { followerCardContent, statsCardContent } from "./content";
import { GlobalStyle } from "./Components/styles/Global";
import { Flex } from "./Components/styles/Flex.styled";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Flex justify="center">
        {followerCardContent.map((card) => (
          <FollowerCard
            key={card.id}
            socialIcon={card.socialIcon}
            arrowIcon={card.arrowIcon}
            username={card.username}
            followers={card.followers}
            updates={card.updates}
            color={card.color}
            smallClr={card.smallClr}
          />
        ))}
      </Flex>

      {statsCardContent.map((card) => (
        <StatsCard
          key={card.id}
          statName={card.statName}
          socialIcon={card.socialIcon}
          arrowIcon={card.arrowIcon}
          count={card.count}
          updates={card.updates}
        />
      ))}
    </div>
  );
}

export default App;
