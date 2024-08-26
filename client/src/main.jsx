import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Fun from './pages/Fun.jsx'
import Work from './pages/Work.jsx'
import Projects from './pages/Projects.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/fun' element={<Fun/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/projects/:name' element={<Projects/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
