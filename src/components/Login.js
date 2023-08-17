import React , {useState,useEffect} from 'react';
// import './styles/login.css'
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios';


const Login = () => {

    
    const navigate = useNavigate();

    const [email,setEmail]   = useState('');
    const [password,setPassword] = useState('');
    

    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3000/login',{email,password})
        .then(res=>{
            if(res.data === "Login Successfully"){
                console.log(res.data)
                // navigate('/Donate')
                alert("Logged In")
                navigate('/Dashboard')
            }else{
                console.log(res.data)
                document.getElementById('result').innerHTML = "Login Failed";
            }
        })
        .catch(err=>console.log(err));
    }
    
    // const [input,setText] = useState({uname: '', password:''})
    
    // const handleChange = (e)=>{
    //     setText({...input,[e.target.uname]: e.target.value})
    // }

    // const submit = (e) =>{
    //     e.preventDefault()
    //     console.log(input)
    // }

// async function submit(e){
//     e.preventDefault();

//     try{
//         await axios.post("http://localhost:3000/",{           
//             uname,password
//         })
//         .then(res => {
//             if(res.data=="exist"){
//                 // history("/Navbar")
//             }
//             else if(res.data=="Not exist"){
//                 alert('User have not signed up')
//             }
//         }) 
//         .catch(e=>{
//             alert("Wrong Details")
//         })
//     }
//     catch(e){
//         console.log(e);
//     }
// }

    return (
        <div className='cover'>
            <form action="POST" onSubmit={handleSubmit}>
                <h1>Login</h1> 
                <input type='text' onChange={e=>setEmail(e.target.value)} placeholder='Email' name='email' />
                <input type='password'  onChange={e=>setPassword(e.target.value)} placeholder='Password' name='password'/>
                <input type="submit"   value="Login"/>
                Don't you Have an Account <Link to="/Signup" style={{textDecoration:'none'}}>Signup</Link>
                <p id='result'></p>
            </form>
        </div>
    )
}
export default Login