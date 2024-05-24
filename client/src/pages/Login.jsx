import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [Data, setData] = useState({
    email : '',
    password : '',
  })

  function loginUser(event) {
    event.preventDefault();
    axios.get('/');
    // rest of your login code
}

  return (
    <div>
        <form onSubmit={ loginUser }>
            <label>Email</label>
            <input type="text" placeholder='Enter you name...' value={Data.email} onChange={ (e)=>{ setData({...Data, email: e.target.value})}}/>
            <label>Password</label>
            <input type="text" placeholder='Enter you name...' value={Data.password} onChange={ (e)=>{ setData({...Data, password: e.target.value})}}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login