/* ══════════════════════════════════════════════════════════════════════
   prerender.mjs — mete el HTML real de la home dentro de dist/index.html

   Por qué: la home es una SPA de React. Sin esto, el HTML servido solo
   tiene un <div id="root"></div> (≈10 palabras) y los rastreadores de IA
   (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) —que NO ejecutan
   JavaScript— ven una página vacía.

   Cómo: se renderiza <App /> con react-dom/server sobre el bundle SSR
   (dist-ssr/) y ese HTML se inyecta en #root del index.html compilado.
   El bundle de cliente sigue cargando y sustituye el snapshot por la app
   interactiva (createRoot limpia el contenedor).

   Uso:  npm run build   (ya encadena los tres pasos)
   ══════════════════════════════════════════════════════════════════════ */
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const htmlPath = resolve(root, 'dist/index.html')
const ssrEntry = resolve(root, 'dist-ssr/entry-server.js')
const MARKER = '<!--APP_HTML-->'

const words = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .split(/\s+/)
    .filter(Boolean).length

let template = readFileSync(htmlPath, 'utf8')

if (!template.includes(MARKER)) {
  console.error(`\n❌ prerender: no encuentro el marcador ${MARKER} en dist/index.html`)
  console.error('   (¿te has saltado el paso "vite build" del cliente?)')
  process.exit(1)
}

let render
try {
  ;({ render } = await import(pathToFileURL(ssrEntry).href))
} catch (err) {
  console.error('\n❌ prerender: no puedo cargar el bundle SSR', ssrEntry)
  console.error(err)
  process.exit(1)
}

const before = words(template)
const appHtml = render()
const after = words(appHtml)

if (after < 400) {
  console.error(`\n❌ prerender: el HTML generado solo tiene ${after} palabras. Algo ha fallado.`)
  process.exit(1)
}

/* El snapshot se envuelve en .prerender: mientras React no ha montado,
   el CSS fuerza que se vea (framer-motion deja estilos initial con opacity:0).
   Al montar, React vacía #root y el envoltorio desaparece. */
const output = template.replace(MARKER, `<div class="prerender">${appHtml}</div>`)

writeFileSync(htmlPath, output)

const hasHidden = /style="[^"]*opacity:\s*0/.test(appHtml)
console.log('\n✅ prerender OK')
console.log(`   palabras en el HTML servido: ${before} → ${words(output)}`)
if (hasHidden) console.log('   ℹ️  hay estilos opacity:0 de animaciones (los neutraliza .prerender)')
