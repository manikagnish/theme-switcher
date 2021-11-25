import FollowerCard from "./Components/FollowerCard";
import StatsCard from "./Components/StatsCard";
import { followerCardContent, statsCardContent } from "./content";
import { GlobalStyle } from "./Components/styles/Global";

function App() {
  return (
    <div>
      <GlobalStyle />
      {followerCardContent.map((card) => (
        <FollowerCard
          key={card.id}
          socialIcon={card.socialIcon}
          arrowIcon={card.arrowIcon}
          username={card.username}
          followers={card.followers}
          updates={card.updates}
        />
      ))}

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
