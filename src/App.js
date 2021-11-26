import { useState } from "react";

import FollowerCard from "./Components/FollowerCard";
import StatsCard from "./Components/StatsCard";
import { followerCardContent, statsCardContent } from "./content";
import { GlobalStyle } from "./Components/styles/Global";
import { Flex } from "./Components/styles/Flex.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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

      <Flex justify="center">
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
      </Flex>
    </ThemeProvider>
  );
}

export default App;
