import React, { useEffect, useState } from 'react'
import './Signin.css'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signin() {
    const navigate = useNavigate()
    const [signin, set_signin] = useState({})
    console.log(signin);
    const inputsignin = (event) => {

        const { name, value } = event.target
        set_signin({ ...signin, [name]: value })
    }

    const getsignin = (event) => {
        event.preventDefault()
        console.log('jhgfd');
        axios.post('http://localhost:2000/signin',signin).then((Response) => {
            console.log(Response.data.details);
            localStorage.setItem('username',Response.data.details.Username)
            localStorage.setItem('userId',Response.data.details._id)
            navigate('/home')
        }).catch((error) => {
            console.log(error);
        })
    }
    


    return (
        <div>
            <>
                <Navbar />
                <div className='signin'>
                    <form className='signin-form'>
                        <h1>Signin form</h1>
                        <div className='signin1'>
                            <div className='signin1-1'>
                                <div className='signin2-1'>
                                    <label>Username</label><br />
                                    <input type='text' className='signin2-Username' name='Username' onChange={inputsignin} />
                                </div>
                            </div>
                            <div className='signin1-1'>
                                <div className='signin2-1'>
                                    <label>Password</label><br />
                                    <input type='Password' className='signin2-1PAssword' name='password' onChange={inputsignin} />
                                </div>
                            </div>

                        </div>
                        <br />
                        <button className='btn btn-primary signin-form-button' onClick={getsignin} >Submit</button>

                    </form>
                </div>
            </>
        </div>
    )
}
