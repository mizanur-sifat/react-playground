import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import bootstrap globally after running bootstrap command in terminal
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'; 
// import css globally after running 'npm install milligram' command in terminal
import 'milligram/dist/milligram.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
