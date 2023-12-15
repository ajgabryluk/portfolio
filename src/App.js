import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Components/home';
import Projects from './Components/projects';

function App() {
  return (
    <div>
      <header>
        <h1>THIS IS THE HEADER</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
      <footer>
        <h1>THIS IS THE FOOTER</h1>
      </footer>
    </div>
  );
}

export default App;
