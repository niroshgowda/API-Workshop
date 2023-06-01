import React ,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Signup.css'

function Signup() {
    const nav=useNavigate();
  const[firstname,setfirstname]=useState("");
  const[lastname,setlastname]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[phoneno,setphoneno]=useState("");

  
  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   console.log(userName,password);

  // }
  const sendtodb=(e)=>{
    e.preventDefault()
    const details={firstname,lastname,email,phoneno,password}
    if(firstname.length===0||lastname.length===0||email.length===0||phoneno.length===0||password.length===0){
      alert("Enter All fields")
    }
    else{
    fetch("http://localhost:8080/postsu",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(details)
    }
    ).then(()=>{
      console.log("New Detail Added");   
      console.log(JSON.stringify(details));
      console.log(e);
      nav("/home")
    })
  }
}
  return (
    <div>
      <div className='img2'>
       <img src="https://media.istockphoto.com/id/949118068/photo/books.jpg?s=612x612&w=0&k=20&c=1vbRHaA_aOl9tLIy6P2UANqQ27KQ_gSF-BH0sUjQ730=" height="750px" alt="img" width="1550px"/>
      </div>
      <div className='rectangle2'></div>
      <div className='head2'>
       <p>Sign up</p>
      </div>
      <div className='form2'>
       <form>

       First_Name &nbsp;&nbsp;: <input type="text200" onChange={(e)=>setfirstname(e.target.value)} value={firstname} placeholder="firstname" /><br/><br/>
      Last_Name  &nbsp;: <input type="text200"  onChange={(e)=>setlastname(e.target.value)} value={lastname} placeholder="laststname" /><br/><br/>

      E-Mail   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <input type="text300"  onChange={(e)=>setemail(e.target.value)} value={email} placeholder="email" /><br/><br/>
       
       Phone_No   &nbsp;: <input type="text300"  onChange={(e)=>setphoneno (e.target.value)} value={phoneno} placeholder="phone no" /><br/><br/>
       Password  &nbsp;&nbsp;: <input type="Password400"  onChange={(e)=>setpassword (e.target.value)} value={password} placeholder="password"/><br/><br/>
       
       <br/>
       <Link to="/login"><button type="submit" class="but2" onClick={sendtodb}>Create Account</button></Link>
       </form>
      </div>
    </div>
  )
}

export default Signup