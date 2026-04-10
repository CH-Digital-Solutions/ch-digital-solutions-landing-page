import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import WebsiteDevelopmentMumbai from "./pages/WebsiteDevelopmentMumbai"
import CustomSoftwareDevelopmentMumbai from "./pages/CustomSoftwareDevelopmentMumbai"
import MobileAppDevelopmentMumbai from "./pages/MobileAppDevelopmentMumbai"
import EcommerceWebsiteDevelopmentMumbai from "./pages/EcommerceWebsiteDevelopmentMumbai"
import ERPSoftwareDevelopmentMumbai from "./pages/ERPSoftwareDevelopmentMumbai"
import WhatsAppService from "./pages/WhatsAppService"
import AICallingService from "./pages/AICallingService"
import Terms from "./pages/Terms"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import WebsiteDevelopmentCostMumbai from "./pages/blog/WebsiteDevelopmentCostMumbai"
import HowToBuildEcommerceWebsite from "./pages/blog/HowToBuildEcommerceWebsite"
import ERPSoftwareForSmallBusiness from "./pages/blog/ERPSoftwareForSmallBusiness"
import ThemeToggle from './components/ThemeToggle'

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
      <ThemeToggle />
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
        <Route
          path="/mobile-app-development-mumbai"
          element={<MobileAppDevelopmentMumbai />}
        />
        <Route path="/ecommerce-website-development-mumbai" element={<EcommerceWebsiteDevelopmentMumbai />} />
        <Route path="/erp-software-development-mumbai" element={<ERPSoftwareDevelopmentMumbai />} />
        <Route path="/whatsapp-automation" element={<WhatsAppService />} />
        <Route path="/ai-calling-agent" element={<AICallingService />} />
        <Route
          path="/website-development-cost-mumbai"
          element={<WebsiteDevelopmentCostMumbai />}
        />
        <Route path="/how-to-build-ecommerce-website" element={<HowToBuildEcommerceWebsite />} />

        <Route path="/erp-software-for-small-business" element={<ERPSoftwareForSmallBusiness />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
