import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GeneraLayout from './components/generaLayout'
import Home from './page/home'
import AboutPage from './page/about'
import KatalogPage from './page/katalog'
import NewsPage from './page/news'
import NewsInsidePage from './page/newsInside'
import CardProductPage from './page/cardProduct'
import ContactPage from './page/contact'
import OrderThanksPage from './page/orderThanks'


function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path='/' element={<GeneraLayout />}>
            <Route index element={<Home />} />
            <Route path='/nas' element={<AboutPage />} />
            <Route path='/katalog' element={<KatalogPage />} />
            <Route path='/novosti' element={<NewsPage />} />
            <Route path='/novostiInside' element={<NewsInsidePage />} />
            <Route path='/card' element={<CardProductPage />} />
            <Route path='/orderthanks' element={<OrderThanksPage />} />
            <Route path='/kontact' element={<ContactPage />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App
