import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
// import App from './App.jsx'
// import AppV2 from './AppV2'
// import AppV3 from './AppV3'
// import AppV4 from './AppV4'
// import AppV5 from './AppV5'
// import AppV6 from './AppV6'
// import MovingDot from './AppV7'
import CVApplication from './CVApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MovingDot /> */}
    <CVApplication />
  </StrictMode>,
)
