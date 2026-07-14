import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import PlanGo from './components/PlanGo.jsx'
import QuienLoUsa from './components/QuienLoUsa.jsx'
import Footer from './components/Footer.jsx'

/* Lazy-loaded */
const Hardware = lazy(() => import('./components/Hardware.jsx'))
const Faq = lazy(() => import('./components/Faq.jsx'))
const Contacto = lazy(() => import('./components/Contacto.jsx'))

const SectionLoader = () => (
  <div className="flex items-center justify-center py-24">
    <div className="w-6 h-6 border-2 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
  </div>
)

export default function App() {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4F46E5" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://westlinksl.com" />
        <link rel="icon" type="image/jpeg" href="/logo.jpg" />

        <title>Westlink SL — Empleado digital desde 49€/mes para tu PYME</title>
        <meta name="description" content="Un empleado digital para tu PYME. Organiza facturas, busca documentos, responde dudas. Por WhatsApp, desde 49€/mes. La Rioja." />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Westlink SL — Empleado digital para PYMES" />
        <meta property="og:description" content="IA privada para tu empresa. Por WhatsApp. Desde 49€/mes." />
        <meta property="og:url" content="https://westlinksl.com" />
        <meta property="og:site_name" content="Westlink SL" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Westlink SL — Empleado digital de IA" />
        <meta name="twitter:description" content="IA privada 24/7. Desde 49€/mes. Por WhatsApp." />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Westlink SL",
            "description": "Implantación de IA privada en PYMES.",
            "url": "https://westlinksl.com",
            "email": "daniel@westlinksl.com",
            "areaServed": ["La Rioja", "Álava", "Navarra", "Burgos", "Soria", "Zaragoza"],
            "priceRange": "€€",
            "address": {"@type": "PostalAddress", "addressRegion": "La Rioja", "addressCountry": "ES"}
          })}
        </script>
      </Helmet>

      <a href="#main-content" className="skip-link">Saltar al contenido</a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <PlanGo />
        <QuienLoUsa />
        <Suspense fallback={<SectionLoader />}>
          <Hardware />
          <Faq />
          <Contacto />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
