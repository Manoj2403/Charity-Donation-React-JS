import React , {useState,useEffect} from 'react';
import './styles/signup.css'
import { useNavigate,Link } from "react-router-dom";
// import { useHistory } from "react-router-dom"
import axios from 'axios';



function Signup()  {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const navigate = useNavigate();


    const submit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3000/api/insert', {
          name:name,
          username:username,
          email:email,
          password:password,
          confirmPassword:confirmPassword,
          mobile:mobile,
        }).then(()=>{
          alert('successful Insert')
          navigate('/')
        });
  
      // try {
      //   const response =  axios.post('http://localhost:3000/Signup', {
      //     name:name,
      //     username:username,
      //     email:email,
      //     password:password,
      //     confirmPassword:confirmPassword,
      //     mobile:mobile
      //   });
      //   if (response.data === 'Data inserted successfully') {
      //     alert('User signed up successfully');
          
      // } else {
      //     alert('An error occurred during sign-up');
      // }
  
      // } catch (error) {
      //   console.error(error);
      //   alert('An error occurred during sign-up');
      //   navigate('/')
      // }
    };
return (
    <div className='cover'>
      <form>
        <h1>Sign Up</h1>
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          name='name'
        />
        <input
          type='text'
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          name='username'
        />
        <input
          type='text'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          name='email'
        />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          name='password'
        />
        <input
          type='password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Confirm Password'
          name='confirmPassword'
        />
        <input
          type='text'
          onChange={(e) => setMobile(e.target.value)}
          placeholder='Mobile Number'
          name='mobile'
        />
        <input type="submit" onClick={submit} value="Signup"/>
        Already have an account? <Link to='/Login' style={{textDecoration:'none'}}>Login</Link>
      </form>
    </div>
  )
    }  
export default Signup