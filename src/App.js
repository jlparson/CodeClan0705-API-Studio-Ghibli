import FilmContainer from './containers/FilmContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="wrapper">
      <h1>Studio Ghibli Films</h1>
      </div>
      <div className="film-container">
      <FilmContainer />
      </div>
    </div>
  );
}

export default App;
