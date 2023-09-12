import React from 'react'
import './Signup.css'
import Navbar from './Navbar'
export default function Signup() {
    return (
        <div>
            <>
            <Navbar/>
                <div className='signup'>
                    <form className='signup-form'>
                        <h1>SignUp</h1>
                        <div className='signup1'>
                            <div className='signup2'>
                                <div className='signup2-1'>
                                    <label>Full Name</label><br />
                                    <input type='text' className='signup2-1FullName' name='signup2-1FullName' />
                                </div>
                                <div className='signup2-1'>
                                    <label>Email</label><br />
                                    <input type='email' className='signup2-1Email' name='signup2-1Email' />
                                </div>
                                <div className='signup2-1'>
                                    <label>Username</label><br />
                                    <input type='text' className='signup2-Username' name='signup2-Username'/>
                                </div>
                                <div className='signup2-1'>
                                    <label>Favorite Genres</label>
                                    <input type='text'className='signup2-Favorite-Genres' name='signup2-Favorite-Genres'/>
                                </div>
                                <div className='signup2-1'>
                                    <label>Preferred Language</label>
                                    <input type='text'className='signup2-Preferred-Language' name='signup2-Preferred-Language'/>
                                </div>
                                <div className='signup2-1'>
                                    <label>Password</label><br />
                                    <input type='Password' className='signup2-1PAssword' name='signup2-1PAssword' />
                                </div>
                                <div className='signup2-1'>
                                    <label>Confirm Password</label><br />
                                    <input type='Password' className='signup2-1ConfirmPassword' name='signup2-1ConfirmPassword' />
                                    <br />
                                </div>
                                <br/>
                                <button className='btn btn-primary signup-form-submit' >Submit</button>

                            </div>
                        </div>
                    </form>
                </div>

            </>
        </div>
    )
}
