import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"

//styles
/**
 * Encounter an issue when importing local fonts
 *  import "./styles/fonts.css" **/
import "./styles/global.css"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
