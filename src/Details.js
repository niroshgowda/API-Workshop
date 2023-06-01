import axios from 'axios';
import React, { useState } from 'react'
import './Details.css';

export default function () 
{
  const[id,setId]=useState('');
  const[title,setTitle]=useState('');
  const[author,setAuthor]=useState('');
  const[publisher,setPublisher]=useState('');
  const[bdate,setBdate]=useState('');
  const[rdate,setRdate]=useState('');
  
  const store={id,title,author,publisher,bdate,rdate}

  const formHolder=(event)=>
  {
    axios.post("http://localhost:8080/signUp",store)
  }

  return (
    <div>
      <div className='img3'>
        <img src="https://c4.wallpaperflare.com/wallpaper/728/926/542/shelves-books-library-candles-wallpaper-preview.jpg"  alt="book" height="1965px" width="1550px"/>
      </div>
      <div className='rectangle3'></div>
      <div className='head3'>
      <h>Book Details</h>
      </div>
      <div className='form3'>
     <form onSubmit={formHolder}>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
    <label>id   &nbsp;: <input type="text4" value={id} placeholder="id...." onChange={(e)=>setId(e.target.value)} /></label><br/><br/>
      
    
     <label for="fname">title
     <input type="text4" id="fname" value={title} name="firstname" placeholder="title...." onChange={(e)=>setTitle(e.target.value)}/></label><br/><br/>

     <label for="fname">author
    <input type="text4" id="fname" value={author} name="firstname" placeholder="author...." onChange={(e)=>setAuthor(e.target.value)}/></label><br/><br/>

    <label for="lname">publisher
    <input type="text4" id="lname" value={publisher} name="lastname" placeholder="publisher...." onChange={(e)=>setPublisher(e.target.value)}/></label><br/><br/>
    
    <label for="lname">bdate
    <input type="text4" id="lname" value={bdate} name="lastname" placeholder="bdate...." onChange={(e)=>setBdate(e.target.value)}/></label><br/><br/>
    
    <label for="lname">rdate
    <input type="text4" id="lname" value={rdate} name="lastname" placeholder="rdate...." onChange={(e)=>setRdate(e.target.value)}/></label><br/><br/>
    
    
    
    <label>
    <input type="submit" value="Submit"></input></label>
    </form>
      </div>
      
    </div>
  )
  
}