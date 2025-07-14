import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter } from "react-router-dom"
import Layout from "./component/layout/Layout"
import "./index.css"

function App() {
  return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
  )
}

export default App
