import React from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Edit from "./pages/Edit"
import Detail from "./pages/Detail"


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/create" element={<Create/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </Router>
  );
}

export default App
