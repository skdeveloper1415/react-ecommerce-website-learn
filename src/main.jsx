import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Appprovider } from './context/productcontext.jsx'
import { BrowserRouter} from "react-router";

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Appprovider>
    <App />
  </Appprovider>
  </BrowserRouter>,
)
