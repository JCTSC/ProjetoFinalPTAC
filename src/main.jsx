import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Registrar from './Registrar'
import Destaque from './Destaque'
import Detalhe from './Detalhe'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registrar" element={<Home />}></Route>
        <Route path="/destaque" element={<Home />}></Route>
        <Route path="/detalhe" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
