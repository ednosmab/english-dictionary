import Dictionary from "./Dictionary";
import './App.css'
import dictionary from './dictionary.svg'
import moon from './moon.svg'

function App() {
  return (
    <div>
      <header className="container">
        <div className="content-container">
          <img src={dictionary} alt=""/>
          <img src={moon} alt=""/>
        </div>
      </header>
      <Dictionary/>
    </div>
  );
}

export default App;
