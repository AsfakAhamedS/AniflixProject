import { createContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './Component/LoginPage'
import HomePage from './Component/HomePage'
import PopularPage from './Component/PopularPage'
import BlogPage from './Component/BlogPage'
import AdminPage from './Component/AdminPage'
import Watchlist from './Component/Watchlist'
import {AppProvider} from './Component/AppContext'
import './App.css'

const ThemeContext = createContext(null);

function App() {
  return (
    <>
    <AppProvider>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
      
    </>
  )
}

export default App
