import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Header from './components/Header'
import Footer from './components/Footer'
import Brand from './pages/Brand'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Cart from './components/Cart'

const App = () => {

  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/our-brands' element={<Brand />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
