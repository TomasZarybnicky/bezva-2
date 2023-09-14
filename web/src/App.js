import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AllKempy from "./pages/AllKempy"
import OneKemp from "./pages/OneKemp"
import Form from "./pages/Form"
import SharedLayout from "./pages/SharedLayout"

const App = () => {
  return <BrowserRouter>
    <Routes>

      <Route path="/" element={ <SharedLayout /> } >
        <Route index element={ <Home /> } />
        <Route path="all-kempy" element={ <AllKempy /> } />
        <Route path="form" element={ <Form /> } />
        <Route path="one-kemp/:movieId" element={ <OneKemp /> } />
      </Route>

    </Routes> 
  </BrowserRouter>
}

export default App