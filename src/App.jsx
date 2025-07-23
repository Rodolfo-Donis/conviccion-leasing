import React from 'react'
import Header from './components/Header'
import Inicio from './components/Inicio'
import ComoFunciona from './components/ComoFunciona'
import NuestrosServicios from './components/NuestrosServicios'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Inicio />
        <ComoFunciona />
        <NuestrosServicios />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App 