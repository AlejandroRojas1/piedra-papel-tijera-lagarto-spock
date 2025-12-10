import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PiedraPapelTijera from './piedraPapelTijera'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PiedraPapelTijera />
  </StrictMode>,
)
