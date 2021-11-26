import { useState, createContext } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = (props) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ToggleContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ToggleContext.Provider>
  );
};
