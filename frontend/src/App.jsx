import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "./components/custom/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Notes from "./pages/Notes"

import Login from "./pages/Login"

import "./App.css"
import Courses from "./pages/Courses"
import Footer from "./components/custom/Footer"
import FooterTop from "./components/custom/FooterTop"
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
   <ToastContainer position="top-center"/>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/courses" element={<Courses/>}/>
       <Route path="/notes" element={<Notes/>}/>
       <Route path="/login" element={<Login/>}/>
     
     </Routes>
     <FooterTop/>
     <Footer/>
    </ThemeProvider>
  )
}

export default App
