import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home'
import Destination from './Components/Destination'
import AboutUs from './Components/AboutUs'

import{BrowserRouter, Routes, Route} from "react-router-dom"



function App(){
 return(
   <>
   {/* <h1 classname="bg-primary">React</h1>
   <p>This is a paragraph</p> */}
   <BrowserRouter>
   <NavBar/>
   <Routes>
     <Route path ="/" element={<Home/>}/>
     <Route path ="/aboutus" element={<AboutUs/>}/>
     <Route path ="/destination" element={<Destination/>}/>
   </Routes>
   </BrowserRouter>
   </>
 )
  }

export default App;