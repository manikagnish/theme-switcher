import {
  FaCaretDown,
  FaCaretUp,
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaYouTube,
} from "react-icons/fa";
import FollowerCard from "./Components/FollowerCard";
import StatsCard from "./Components/StatsCard";
import { GlobalStyle } from "./Components/styles/Global";

function App() {
  return (
    <div>
      <GlobalStyle />
      <FollowerCard
        socialIcon={<FaFacebookSquare />}
        arrowIcon={<FaCaretUp />}
        username="@nathanf"
        followers={1987}
        updates={12}
      />
      <StatsCard
        statName="Page Views"
        socialIcon={<FaFacebookSquare />}
        arrowIcon={<FaCaretUp />}
        count={1987}
        updates={3}
      />
    </div>
  );
}

export default App;
