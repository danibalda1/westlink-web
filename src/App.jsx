import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import QueHacemos from './components/QueHacemos.jsx'
import CasosDeUso from './components/CasosDeUso.jsx'
import Comparativa from './components/Comparativa.jsx'
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

        <title>Westlink SL — Contrata un empleado digital de IA privado para tu PYME</title>
        <meta name="description" content="Instalamos un empleado digital de IA en tu PYME. Privado, local, sin cuotas mensuales. Automatiza tareas, responde dudas y busca documentos. La Rioja y alrededores." />
        <meta name="keywords" content="IA privada, inteligencia artificial PYMES, empleado digital, automatización empresarial, La Rioja, Westlink, IA local" />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Westlink SL — Contrata un empleado digital de IA para tu PYME" />
        <meta property="og:description" content="Instalamos un empleado digital de IA en tu empresa. Privado, local, sin cuotas. 24/7." />
        <meta property="og:url" content="https://westlinksl.com" />
        <meta property="og:site_name" content="Westlink SL" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Westlink SL — Empleado digital de IA para PYMES" />
        <meta name="twitter:description" content="Tu empresa merece un empleado que nunca duerma. IA privada instalada en local." />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Qué diferencia hay entre un chatbot y vuestro empleado virtual?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un chatbot responde preguntas con respuestas prefabricadas. Nuestro empleado virtual ejecuta tareas reales: redacta documentos, procesa facturas, gestiona inventarios, coordina pedidos. Es un trabajador digital, no un asistente de conversación."
                }
              },
              {
                "@type": "Question",
                "name": "¿Mis datos están seguros?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Completamente. Todo el sistema se instala en hardware local dentro de tus instalaciones. No enviamos datos a ninguna nube externa. Cumplimos RGPD y EU AI Act."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No tenemos cuotas mensuales. Es una inversión única por implantación. El sistema es tuyo para siempre. El payback suele llegar en 3-6 meses."
                }
              }
            ]
          })}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Westlink SL",
            "description": "Implantación de empleados digitales de IA privada en PYMES españolas.",
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
        <CasosDeUso />
        <Comparativa />
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
