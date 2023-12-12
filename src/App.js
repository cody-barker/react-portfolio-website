import './styles/App.css';
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './components/About'
import Projects from './components/Projects';
import NotFound from './pages/NotFound'

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </main>
  );
}

export default App;