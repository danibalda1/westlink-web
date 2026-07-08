import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'

/* Lazy-loaded sections — below the fold, no need for eager load */
const QueHacemos = lazy(() => import('./components/QueHacemos.jsx'))
const CasosDeUso = lazy(() => import('./components/CasosDeUso.jsx'))
const Comparativa = lazy(() => import('./components/Comparativa.jsx'))
const Sectores = lazy(() => import('./components/Sectores.jsx'))
const Ventajas = lazy(() => import('./components/Ventajas.jsx'))
const ComoFunciona = lazy(() => import('./components/ComoFunciona.jsx'))
const Hardware = lazy(() => import('./components/Hardware.jsx'))
const Cobertura = lazy(() => import('./components/Cobertura.jsx'))
const KitDigital = lazy(() => import('./components/KitDigital.jsx'))
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

        <title>Westlink SL — Empleado digital de IA desde 49€/mes para tu PYME</title>
        <meta name="description" content="Instalamos un empleado digital de IA en tu PYME. Desde 49€/mes sin hardware. Privado, local, 24/7. La Rioja." />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Westlink SL — Empleado digital de IA para PYMES" />
        <meta property="og:description" content="Instalamos IA privada en tu empresa. Sin nube. Sin cuotas." />
        <meta property="og:url" content="https://westlinksl.com" />
        <meta property="og:site_name" content="Westlink SL" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Westlink SL — Empleado digital de IA" />
        <meta name="twitter:description" content="IA privada 24/7 instalada en tu PYME. Sin nube. Pago único." />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {"@type":"Question","name":"¿Qué diferencia hay entre un chatbot y vuestro empleado virtual?","acceptedAnswer":{"@type":"Answer","text":"Un chatbot responde preguntas prefabricadas. Nuestro empleado virtual ejecuta tareas reales: redacta documentos, procesa facturas, gestiona inventarios, coordina pedidos. Es un trabajador digital."}},
              {"@type":"Question","name":"¿Mis datos están seguros?","acceptedAnswer":{"@type":"Answer","text":"Sí. Todo corre en hardware local dentro de tus instalaciones. Cumplimos RGPD y EU AI Act."}},
              {"@type":"Question","name":"¿Cuánto cuesta?","acceptedAnswer":{"@type":"Answer","text":"Inversión única desde 2.300€. Sin cuotas mensuales. El sistema es tuyo. Payback en 3-6 meses."}}
            ]
          })}
        </script>

        {/* Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context":"https://schema.org","@type":"LocalBusiness",
            "name":"Westlink SL","description":"Implantación de IA privada en PYMES.",
            "url":"https://westlinksl.com","email":"daniel@westlinksl.com",
            "areaServed":["La Rioja","Álava","Navarra","Burgos","Soria","Zaragoza"],
            "priceRange":"€€","address":{"@type":"PostalAddress","addressRegion":"La Rioja","addressCountry":"ES"}
          })}
        </script>
      </Helmet>

      <a href="#main-content" className="skip-link">Saltar al contenido</a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
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
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
