import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import QueHacemos from './components/QueHacemos.jsx'
import Sectores from './components/Sectores.jsx'
import Ventajas from './components/Ventajas.jsx'
import ComoFunciona from './components/ComoFunciona.jsx'
import Hardware from './components/Hardware.jsx'
import Cobertura from './components/Cobertura.jsx'
import KitDigital from './components/KitDigital.jsx'
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

        <title>Westlink SL — Tu empleado de IA privado para PYMES · La Rioja</title>
        <meta name="description" content="Implantamos IA privada en PYMES de La Rioja y alrededores. Un empleado digital que trabaja 24/7 con tus datos seguros. Bodegas, gestorías, despachos, logística." />
        <meta name="keywords" content="IA privada, inteligencia artificial, PYMES, La Rioja, bodegas, empleado virtual, automatización" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Westlink SL — Tu empleado de IA privado para PYMES · La Rioja" />
        <meta property="og:description" content="Implantamos IA privada en PYMES de La Rioja y alrededores. Un empleado digital que trabaja 24/7 con tus datos seguros." />
        <meta property="og:url" content="https://westlinksl.com" />
        <meta property="og:site_name" content="Westlink SL" />
        <meta property="og:locale" content="es_ES" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Westlink SL — Tu empleado de IA privado para PYMES · La Rioja" />
        <meta name="twitter:description" content="Implantamos IA privada en PYMES de La Rioja y alrededores. Un empleado digital que trabaja 24/7 con tus datos seguros." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Westlink SL",
            "description": "Implantación de IA privada en PYMES españolas. Empleado virtual con inteligencia artificial.",
            "url": "https://westlinksl.com",
            "email": "daniel@westlinksl.com",
            "areaServed": ["La Rioja", "Álava", "Navarra", "Burgos", "Soria", "Zaragoza"],
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "La Rioja",
              "addressCountry": "ES"
            }
          })}
        </script>
      </Helmet>

      <a href="#main-content" className="skip-link">Saltar al contenido</a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <QueHacemos />
        <Sectores />
        <Ventajas />
        <ComoFunciona />
        <Hardware />
        <Cobertura />
        <KitDigital />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
