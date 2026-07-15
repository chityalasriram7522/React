import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Clock from './Clock.jsx'
import light from './light.jsx'
import food from './food.jsx'
import Counter from './Counter.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Clock />
    <light />
    <food/>
  </StrictMode>,
)
