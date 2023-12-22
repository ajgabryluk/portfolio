import { Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import Home from "./Components/Home"
import Projects from './Components/Projects';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Aaron Gabryluk';
  }, []);
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
