import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";

export default function App() {
    return (
        <>
        <Header />
        <main>
		    <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <MovieList />
        </div>
        </main>

        </>
    );
}
