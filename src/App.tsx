import React from "react"
import Head from "./components/Head"
import Navbar from "./components/Navbar"

import { Routes, Route, Link } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import OurProjects from './screens/OurProjects';
import Work from './screens/Work';

const App = () => {
  const buttonStyle = "p-2 flex items-center bg-gray-800 rounded-md border border-gray-600 hover:bg-pink-600 hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-600 hover:border hover:border-pink-400 transition"

  return (
    <>
      <Head title='Главная' />
      <main className="bg-gradient-to-tr from-pink-500 to-yellow-500 w-full h-full flex justify-center font-[Comfortaa] text-white">
        <div className="container-lg px-4 h-[100vh] overflow-auto md:w-[800px] mx-auto bg-gray-800">
          <Navbar>
            <Link className={buttonStyle} to="/">Главная</Link>
            <Link className={buttonStyle} to="/work">Работа у нас</Link>
            <Link className={buttonStyle} to="/projects">Наши проекты</Link>
          </Navbar>
          <Routes>
            <Route index path="/" element={<MainScreen />} />
            <Route path="/projects" element={<OurProjects />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
