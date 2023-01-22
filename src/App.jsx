import axios from 'axios'
import { useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import NewsList from './components/NewsList/NewsList'
import Slider from './components/Slider/Slider'
import MainLayout from './layouts/MainLayout'
import AboutMe from './pages/AboutMe/AboutMe'
import Category from './pages/Category/Category'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="category/*" element={<Category />} />
        <Route path='hakkimda' element={<AboutMe/>}/>
        <Route path='search' element={<Search/>}/>
      </Route>
  )
)


function App() {
  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App




















