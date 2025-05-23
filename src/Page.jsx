import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";
import { ThemeContext } from "./context";
export default function Page() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? "dark" : ""} h-full w-full`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
