import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './cards.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card />
  </StrictMode>,
)
