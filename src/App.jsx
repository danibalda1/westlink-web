import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QueHacemos from './components/QueHacemos'
import Ventajas from './components/Ventajas'
import ComoFunciona from './components/ComoFunciona'
import CasosDeUso from './components/CasosDeUso'
import Tecnologias from './components/Tecnologias'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Westlink SL — Tu empleado de IA privado para PYMES · La Rioja</title>
        <meta name="description" content="Empresa familiar riojana. Instalamos inteligencia artificial privada en tu PYME. Un trabajador digital 24/7 que aprende tu negocio. Datos seguros, sin nube. Villamediana de Iregua, La Rioja." />
        <meta name="keywords" content="IA privada, inteligencia artificial pymes, empleado digital, automatización empresas, ia local, ollama, docker ia, westlink, la rioja, villamediana de iregua, empresa familiar" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Westlink SL — Tu empleado de IA privado para PYMES · La Rioja" />
        <meta property="og:description" content="Empresa familiar riojana. Instalamos inteligencia artificial privada en tu PYME. Un trabajador digital 24/7 que aprende tu negocio. Villamediana de Iregua." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://westlinksl.com" />
        <meta property="og:image" content="https://westlinksl.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Westlink SL — Tu empleado de IA privado para PYMES · La Rioja" />
        <meta name="twitter:description" content="Empresa familiar riojana. Instalamos inteligencia artificial privada en tu PYME. Un trabajador digital 24/7." />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <link rel="icon" type="image/jpeg" href="/logo.jpg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <QueHacemos />
          <Ventajas />
          <ComoFunciona />
          <CasosDeUso />
          <Tecnologias />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  )
}
