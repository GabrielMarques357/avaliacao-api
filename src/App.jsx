import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import TheCat from './pages/the-cat'
import Home from './pages/Home'



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/the-cat' element={<TheCat/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
