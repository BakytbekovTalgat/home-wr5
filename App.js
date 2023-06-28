import React from "react";
import { useContext } from "react";

export default function MyPage() {
  return(
    <ThemeContext.Provider value="dark">
      <FlavorForm />
    </ThemeContext.Provider>
  );
}

export default function Button() {
    const theme = useContext(ThemeContext)
}