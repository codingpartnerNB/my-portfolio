import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Themes from './components/theme/Themes'
import { Suspense, lazy } from 'react'
import LoaderSpinner from './components/UI/LoaderSpinner'

function App() {
  const Home = lazy(()=>import('./pages/home/Home'));
  const About = lazy(()=>import('./pages/about/About'));
  const Portfolio = lazy(()=>import('./pages/portfolio/Portfolio'));
  const Contact = lazy(()=>import('./pages/contact/Contact'));
  return (
    <BrowserRouter>
    <Navbar />
    <Themes />
      <Routes>
        <Route index element={<Suspense fallback={<div className='loader__style'><LoaderSpinner /></div>}><Home /></Suspense>} />
        <Route path='about' element={<Suspense fallback={<div className='loader__style'><LoaderSpinner /></div>}><About /></Suspense>} />
        <Route path='portfolio' element={<Suspense fallback={<div className='loader__style'><LoaderSpinner /></div>}><Portfolio /></Suspense>} />
        <Route path='contact' element={<Suspense fallback={<div className='loader__style'><LoaderSpinner /></div>}><Contact /></Suspense>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
