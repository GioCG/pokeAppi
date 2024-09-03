import React from "react"
import ReactDOM from "react-dom/client"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import {PokeApp} from "./components/PokeApp"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokeApp />
  </React.StrictMode>
)
