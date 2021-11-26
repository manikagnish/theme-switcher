import { useContext } from "react";
import { ToggleContext } from "../ToggleContext";
import { StyledToggleSwitch } from "./styles/ToggleSwitch.styled";

export default function ToggleSwitch() {
  const [theme, setTheme] = useContext(ToggleContext);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <StyledToggleSwitch>
      <input type="checkbox" />
      <span onClick={themeToggler}></span>
    </StyledToggleSwitch>
  );
}
