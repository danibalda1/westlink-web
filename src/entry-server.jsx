/* Entrada de servidor: solo se usa en build para generar el snapshot
   estático de la home (scripts/prerender.mjs). No se sirve nunca. */
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export function render() {
  return renderToString(<App />)
}
