import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import TheCat from './pages/the-cat'
import Home from './pages/Home'
import LoadGallery from './pages/the-cat'
import RickAndMorty from './pages/the-cat'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
       
        <Route path='/the-cat' element={<RickAndMorty/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
