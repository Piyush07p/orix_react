import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Contact from './pages/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Services from './pages/Services'
import ServicesDetails from './pages/ServicesDetails'

import Portfolio1 from './pages/Portfolio1'
import Portfolio2 from './pages/Portfolio2'
import Portfolio3 from './pages/Portfolio3'

import Blog from './pages/Blog'
import BlogDetail1 from './pages/BlogDetail1'
import BlogDetail2 from './pages/BlogDetail2'

import About from './pages/About'
import Pricing from './pages/Pricing'
import Error404 from './pages/Error404'

import Home from './pages/Home'
import Home2 from './pages/Home2'
import Home3 from './pages/Home3'
import Home4 from './pages/Home4'
import Home4Dark from './pages/Home4Dark'




const App = () => {
  return (

       <BrowserRouter>
         
          <Navbar/>
           <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/home2' element={<Home2/>}/>
             <Route path='/home3' element={<Home3/>}/>
             <Route path='/home4' element={<Home4/>}/>
             <Route path='/home4Dark' element={<Home4Dark/>}/>

             <Route path='/contact' element={<Contact/>}/>
             
             <Route path='/services' element={<Services/>}/>
             <Route path='/serviceDetail' element={<ServicesDetails/>}/>

             <Route path='/portfolio1' element={<Portfolio1/>}/>
             <Route path='/portfolio2' element={<Portfolio2/>}/>
             <Route path='/portfolio3' element={<Portfolio3/>}/>

             <Route path='/blog' element={<Blog/>}/>
             <Route path='/BlogDetail1' element={<BlogDetail1/>}/>
             <Route path='/BlogDetail2' element={<BlogDetail2/>}/>

             <Route path='/about' element={<About/>}/>
             <Route path='/pricing' element={<Pricing/>}/>
             <Route path='/error404' element={<Error404/>}/>




           </Routes>
          <Footer/>
       
       </BrowserRouter>

  )
}

export default App