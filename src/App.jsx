import './App.css'
import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ThemeToggle from './components/ThemeToggle'

// Lazy-loaded routes — each page loads only when visited
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const WebsiteDevelopmentMumbai = lazy(() => import('./pages/WebsiteDevelopmentMumbai'))
const ServiceLocation = lazy(() => import('./pages/ServiceLocation'))
const CustomSoftwareDevelopmentMumbai = lazy(() => import('./pages/CustomSoftwareDevelopmentMumbai'))
const MobileAppDevelopmentMumbai = lazy(() => import('./pages/MobileAppDevelopmentMumbai'))
const EcommerceWebsiteDevelopmentMumbai = lazy(() => import('./pages/EcommerceWebsiteDevelopmentMumbai'))
const ERPSoftwareDevelopmentMumbai = lazy(() => import('./pages/ERPSoftwareDevelopmentMumbai'))
const WhatsAppService = lazy(() => import('./pages/WhatsAppService'))
const AICallingService = lazy(() => import('./pages/AICallingService'))
const WebsiteDevelopmentCostMumbai = lazy(() => import('./pages/blog/WebsiteDevelopmentCostMumbai'))
const HowToBuildEcommerceWebsite = lazy(() => import('./pages/blog/HowToBuildEcommerceWebsite'))
const ERPSoftwareForSmallBusiness = lazy(() => import('./pages/blog/ERPSoftwareForSmallBusiness'))
const Terms = lazy(() => import('./pages/Terms'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const ComingSoon = lazy(() => import('./pages/ComingSoon'))
const CostOfCustomSoftwareDevelopmentIndia = lazy(() => import('./pages/blog/CostOfCustomSoftwareDevelopmentIndia'))
const ReactVsWordpressForStartups = lazy(() => import('./pages/blog/ReactVsWordpressForStartups'))
const DynamicBlog = lazy(() => import('./pages/DynamicBlog'))
const BlogIndex = lazy(() => import('./pages/BlogIndex'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [pathname, hash])

  return null
}

// Minimal loading state — invisible to avoid layout shift
function PageLoader() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]" />
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeToggle />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/blog/:slug" element={<DynamicBlog />} />
          <Route
            path="/website-development-company-mumbai"
            element={<WebsiteDevelopmentMumbai />
            }
          />
          {['website-development', 'custom-software-development', 'mobile-app-development', 'ecommerce-website-development', 'erp-software-development'].map(service => (
            <Route
              key={service}
              path={`/${service}-in-:location`}
              element={<ServiceLocation service={service} />}
            />
          ))}
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
          <Route path="/cost-of-custom-software-development-india" element={<CostOfCustomSoftwareDevelopmentIndia />} />
          <Route path="/react-vs-wordpress-for-startups" element={<ReactVsWordpressForStartups />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
