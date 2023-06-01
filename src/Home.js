import React from 'react'
import './Home.css'
import Login from './Login'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div class="full">
       <div className='Nevebar'>
          <div className="hhhh">
            <h2 className="head"><p>NewBerry<br/></p>
            <p>Library</p></h2>
         </div>
      <div className='menu'>
      <ul>
          <li>Home</li>
           <li><Link to="details">Books</Link></li>
           <li><Link to="signup">Signup</Link></li>
           <li>Contact</li>
           </ul>
      </div>

      <div id="card">hi</div>
      <div id="text">
      <text> <br/>Everything you need for better future<br/>
      and success has already been written .<br/>
      And Guess what ? All you have to do is go to <br/>
      THE LIBRARY
      </text>
      
      </div>
    
    <Login id="logincls"/>
    
   
    
    </div>
    </div>

  )
}

export default Home