import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error404Page from './pages/Error404Page'
import Property from './pages/Property'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/property/:id' element={<Property />}></Route>
          <Route path='/404' element={<Error404Page />}></Route>
          <Route path='/*' element={<Error404Page />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App