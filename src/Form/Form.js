import React, {} from 'react'
import {useNavigate} from 'react-router-dom'
import Users from "./users.json"
import "./form.css"
function Form() {



const  Navigate = useNavigate()

const [input, setinput] = React.useState({email:"",passwd:""}) 

 const handlechange = (ev) =>{
  setinput({...input,[ev.target.name]:ev.target.value})

 }
const submitter = () =>{
  console.log()
    Users.forEach((val)=>{
        if(val.email === input.email){
            Navigate("home")
        }
    })
}
  return (
    <div>
        <h2>Login Page</h2><br></br>
        <div class="login">    
    <form id="login" method="get" action="login.php" >    
        <label><b>User Name     
        </b>    
        </label>    
        <input type="text" name="email" id="Uname" placeholder="Username" onChange={handlechange}></input>    
        <br></br>    
        <label><b>Password     
        </b>    
        </label>    
        <input type="Password" name="Passwd" id="Pass" placeholder="Passwordd" onChange={handlechange}></input>    
        <br></br>    
        <input type="button" name="log" id="log" value="Log In" onClick={submitter} ></input>       
        <br></br>    
        <input type="checkbox" id="check"></input>    
        <span>Remember me</span>    
        <br></br>     
    </form>     
</div> 
    </div>
  )

}
export default Form