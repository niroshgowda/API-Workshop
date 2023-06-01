import React,{useState} from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
export default function Login() {
 
  const[password,setPassword]= useState('');
  const[email,setEmail]= useState('');
  const[error,setError]=useState(false);
 
  const formHolder=(event)=>
  {
    event.preventDefault();
    if(password!=="admin" && email!=="admin")
    {
      setError(true);
    } 
    if(password==="admin" && email==="admin")
    {
       const loginObj=
       {
         
          pwd:password,
          em:email
       }
    
      alert(JSON.stringify(loginObj));
     
       
    }
  }
  return (
    <div className='fullform'>
    
    <div className='body1'>
         
    </div>
    
    <div className='rectangle'></div>

    <div className='head1'>
      <p>Login</p>
    </div>
    <div className='form1'>
   
       
    <form onSubmit={formHolder}>
    

   E-Mail &nbsp;&nbsp; &nbsp;  &nbsp;: <input type="text100" value={email} placeholder="e-mail" onChange={(e)=>setEmail(e.target.value)} required/><br/>
    <div>
      {error && email!=="admin"?
      <label style={{color:'red'}}>E-mail is Invalid</label>:""}
    </div>  

    <br/>
    
    Password  &nbsp;: <input type="Password300" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/><br/>
    <div>
      {error && password!=="admin"?
      <label style={{color:'red'}}>Password is Invalid</label>:""}
    </div>  

    <br/>
    
    <Link to="/details"><button type="submit" class="but">Login</button></Link>
    
    </form>
    </div>
    <Link to="/signup"><h4 className='sign'>Don't have an account? SIGN UP</h4></Link>
  
    
    
    </div>
  )
}