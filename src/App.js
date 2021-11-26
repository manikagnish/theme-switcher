import { useContext } from "react";

import FollowerCard from "./Components/FollowerCard";
import StatsCard from "./Components/StatsCard";
import Navbar from "./Components/Navbar";

import { followerCardContent, statsCardContent } from "./content";

import { GlobalStyle } from "./Components/styles/Global";
import { Grid } from "./Components/styles/Flex.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

import { ToggleContext } from "./ToggleContext";

function App() {
  const [theme] = useContext(ToggleContext);
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar />
      <Grid>
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
      </Grid>

      <Grid>
        {statsCardContent.map((card) => (
          <StatsCard
            key={card.id}
            statName={card.statName}
            socialIcon={card.socialIcon}
            arrowIcon={card.arrowIcon}
            count={card.count}
            updates={card.updates}
            color={card.color}
            smallClr={card.smallClr}
          />
        ))}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
