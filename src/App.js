import Dictionary from "./Components/Dictionary";
import DarkMode from "./Components/DarkMode";
import "./App.css";
import dictionary from "./dictionary.svg";
import moon from "./moon.svg";

function App() {
    return (
        <div>
            <header className="container">
                <div className="content-container">
                    <img src={dictionary} alt="" />
                    <div className="theme-container">
                        <div className="dark-mode">
                            <DarkMode />
                        </div>
                        <img src={moon} alt="" />
                    </div>
                </div>
            </header>
            <Dictionary />
        </div>
    );
}

export default App;
