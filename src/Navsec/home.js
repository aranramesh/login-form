import React from 'react'
import { Link } from 'react-router-dom'

import "./home.css"

function Home() {
 
  return (
   <div>
    <div className='navmain'>
    <section class="header">
    <section class="container">

  
    <div class="nav">
      <div class="logo">
       
        <img src="assets/hero/35165466-removebg-preview.png" alt=""/>
      </div>
      <div class="navbar">
        <ul>
          <li>Home</li>
          <li> <Link to={"/todo"}> To Do lists</Link> </li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </section>
</section>
    </div>
   </div>
  
  )
}


export default Home