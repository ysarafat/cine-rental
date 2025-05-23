import { useState } from "react";
import { MovieContext, ThemeContext } from "./index";

export default function Provider({ children }) {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        {children}
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}
