
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Gallery from "./pages/Gallery.jsx"
import About from './pages/About.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
