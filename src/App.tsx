import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import About from './pages/About'
import Brand from './pages/Brand'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Header from './components/Header'

function App() {

  return (
    <>
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/about' element={<About />} />
            <Route path='/brand' element={<Brand />} />
            <Route path='/contact' element={<Contact />} />
            {/* <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Contact />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
