import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './component/LoginPage'
import HomePage from './component/HomePage/HomePage'
import PopularPage from "./component/PopularPage/PopularPage";

function App() {

  return (
    <>
      {/* <LoginPage/> */}
      {/* <HomePage/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/popular" element={<PopularPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
