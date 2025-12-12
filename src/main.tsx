import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  RulesCard  from './components/RulesCard'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RulesCard />
  </StrictMode>,
)
