import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FetchState from './components/Gallery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchState render={(data) => <App tours={data} />}/>
  </StrictMode>,
)
