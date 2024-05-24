import React from 'react'
import { useState } from 'react'

const Register = () => {
    const [Data, setData] = useState({
        username : '',
        email : '',
        password : '',
    })

    // const registerUser = (e) =>{
    //     e.preventDefault();
    // }
    function registerUser(event) {
        event.preventDefault();
        // rest of your login code
    }
    return (
        <div>
            <form onSubmit={ registerUser }>
                <label>Username</label>
                <input type="text" placeholder='Enter you name...' value={Data.username} onChange={ (e)=>{ setData({...Data, username: e.target.value})}}/> 
                <label>Email</label>
                <input type="text" placeholder='Enter you name...' value={Data.email} onChange={ (e)=>{ setData({...Data, email: e.target.value})}}/>
                <label>Password</label>
                <input type="text" placeholder='Enter you name...' value={Data.password} onChange={ (e)=>{ setData({...Data, password: e.target.value})}}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register