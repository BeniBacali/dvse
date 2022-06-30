import React from "react"
import Header from "./components/Header"
import MainAbout from "./components/MainAbout"
import MainInterests from "./components/MainIntersts"
import Footer from "./components/Footer"
import './App.css';

export default function App() {
  return (
      <div className="container">
          <Header />
          <MainAbout />
          <MainInterests />
          <Footer />
      </div>
  )
}
