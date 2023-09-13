import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AllKempy from "./pages/AllKempy"
import OneKemp from "./pages/OneKemp"
import SharedLayout from "./pages/SharedLayout"

const App = () => {
  return <BrowserRouter>
    <Routes>

      <Route path="/" element={ <SharedLayout /> } >
        <Route index element={ <Home /> } />
        <Route path="all-kempy" element={ <AllKempy /> } />
        <Route path="one-kemp" element={ <OneKemp /> } />
      </Route>


    </Routes> 
  </BrowserRouter>
}

export default App