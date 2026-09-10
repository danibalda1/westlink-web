import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* index.html llega con un snapshot estático dentro de #root (lo genera
   scripts/prerender.mjs en el build) para que los rastreadores de IA lean
   el contenido sin ejecutar JS. createRoot vacía ese contenedor y monta la
   app interactiva encima: cero riesgo de desajustes de hidratación. */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
