import { useReducer, useState } from "react";
import { cartReducer, initialState } from "../reducers/CartReducer";
import { MovieContext, ThemeContext } from "./index";

export default function Provider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        {children}
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}
