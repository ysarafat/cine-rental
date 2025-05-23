import Provider from "./context/Provider";
import Page from "./Page";

export default function App() {
  // const { darkMode } = useContext(ThemeContext);
  return (
    <Provider>
      <Page />
    </Provider>
  );
}
