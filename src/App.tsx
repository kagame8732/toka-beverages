import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Welcome />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
