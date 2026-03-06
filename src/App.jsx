import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import WebsiteDevelopmentMumbai from "./pages/WebsiteDevelopmentMumbai"
import CustomSoftwareDevelopmentMumbai from "./pages/CustomSoftwareDevelopmentMumbai";

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route
          path="/website-development-company-mumbai"
          element={<WebsiteDevelopmentMumbai />
          }
        />
        <Route
          path="/custom-software-development-mumbai"
          element={<CustomSoftwareDevelopmentMumbai />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
