import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary
      fallback={
        <div style={{ padding: '2rem', fontFamily: 'sans-serif', color: '#0f172a' }}>
          <h1>Something went wrong</h1>
          <p>Open the browser console (F12) for details.</p>
        </div>
      }
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
)

