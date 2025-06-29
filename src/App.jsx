import { BrowserRouter, Routes, Route } from "react-router";
import Home from './home/index';
import './App.css';
import About from "./about";
import ErrorPage from "./error";
import Header from "./components/Header";

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
