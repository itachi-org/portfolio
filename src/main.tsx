import ReactDOM from 'react-dom/client'

import './styles.css'
import reportWebVitals from './reportWebVitals.ts'

import App from './app.tsx'

const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}

reportWebVitals()
