import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error404Page from './pages/Error404Page'

function App() {
  
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/*' element={<Error404Page />}></Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
