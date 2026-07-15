import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Run,Run2} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <App />
  <Run />
  <Run2 />
  </>
)