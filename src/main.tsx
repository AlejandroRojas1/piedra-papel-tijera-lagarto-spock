import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PiedraPapelTijera from './piedraPapelTijera'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < PiedraPapelTijera />
  </StrictMode>,
)
