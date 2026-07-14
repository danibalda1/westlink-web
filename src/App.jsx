import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import PlanGo from './components/PlanGo.jsx'
import QuienLoUsa from './components/QuienLoUsa.jsx'
import Hardware from './components/Hardware.jsx'
import Faq from './components/Faq.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

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

        <title>Westlink SL — Olvídate del papeleo. IA para PYMES desde 49€/mes</title>
        <meta name="description" content="Olvídate de perder horas con facturas y papeles. Un empleado digital que trabaja por WhatsApp. Desde 49€/mes. La Rioja." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Westlink SL — Olvídate del papeleo" />
        <meta property="og:description" content="Un empleado digital para tu negocio. Por WhatsApp. Desde 49€/mes." />
        <meta property="og:url" content="https://westlinksl.com" />
        <meta property="og:site_name" content="Westlink SL" />
        <meta property="og:locale" content="es_ES" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Westlink SL — Olvídate del papeleo" />
        <meta name="twitter:description" content="IA privada 24/7. Desde 49€/mes. Por WhatsApp." />

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
            "address": {"@type": "PostalAddress", "addressRegion": "La Rioja", "addressCountry": "ES"},
            "telephone": "+34648253217"
          })}
        </script>
      </Helmet>

      <a href="#main-content" className="skip-link">Saltar al contenido</a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <PlanGo />
        <QuienLoUsa />
        <Hardware />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
