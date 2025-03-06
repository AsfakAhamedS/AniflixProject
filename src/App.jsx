import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './Component/LoginPage'
import HomePage from './Component/HomePage'
import PopularPage from './Component/PopularPage'
import BlogPage from './Component/BlogPage'
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
