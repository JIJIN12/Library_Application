import React, { useEffect, useState } from 'react'
import './Addbook.css'
import Navbar from './Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Addbook() {
    const [addbook, set_addbook] = useState({})
    const [file, set_file] = useState()
    const navigate = useNavigate()
    console.log(addbook);
    const addbook_input = (event) => {
        const {name,value} = event.target
        set_addbook({ ...addbook, [name]: value })
    }


    const Addbook_submit = (event) => {
        event.preventDefault()
        if (file) {
            const data = new FormData()
            const filename = file.name
            data.append("name",filename)
            data.append("file",file)
           

            axios.post(`http://localhost:2000/book/uploads`, data).then((addbook_data) => {
                console.log(addbook_data);
                
            }).catch((error) => {
                console.log(error);
            })
        }
        axios.post(`http://localhost:2000/book/addbook`, addbook).then((addbook_data) => {
            console.log(addbook_data);
            navigate('/books')
        }).catch((error) => {
            console.log(error);
        })




    }
    return (
        <div>
            <>
                <Navbar />

                <form className='addbook-form'>
                    <div className='addbook1'>
                        <div className='addbook2'>
                            <div className='addbook2-h2'>
                                <h1 >Addbook</h1>
                            </div>

                            {/* <div className='addbook2-1'> */}
                            {/* <label>Name</label><br /> */}

                            {/* Addbook input name should be same as of backend */}
                            {/* <input type='text' className='addbook2-1_input1' name='Addbook_Name' placeholder-disabled='Name' onChange={addbook_input} />
                            </div>
                            <div className='addbook2-1'>
                                <label>Email</label><br />
                                <input type='email' className='addbook2-1_input1' name='Addbook_Email' placeholder-disabled='Email'onChange={addbook_input} />
                            </div> */}
                            <div className='addbook2-1'>
                                <label>Book Name</label><br />
                                <input type='text' className='addbook2-1_input1' name='bookname' placeholder-disabled='Book Name' onChange={addbook_input} />
                            </div>
                            <div className='addbook2-1'>
                                <label>UserName</label><br />
                                <input type='text' className='addbook2-1_input1' name='username' placeholder-disabled='user Name' onChange={addbook_input} />
                            </div>
                            <div className='addbook2-1'>
                                <label>Image</label><br />
                                <input type='file' className='addbook2-1_input1' name='image' placeholder-disabled='Image'
                                    onChange={(e) => { set_file(e.target.files[0]); 
                                        set_addbook({ ...addbook, image: e.target.files[0].name }) 
                                    }} />
                            </div>
                            <div className='addbook2-1'>
                                <label>Author</label><br />
                                <input type='text' className='addbook2-1_input1' name='author' placeholder-disabled='Author' onChange={addbook_input} />
                            </div>
                            <div className='addbook2-1'>
                                <label>Genre</label><br />
                                <input type='text' className='addbook2-1_input1' name='bookgenre' placeholder-disabled='Genre' onChange={addbook_input} />
                            </div>



                            <div className='addbook2-1'>
                                <label>Book Description</label><br />
                                <input type='text' className='addbook2-1_input1' name='bookdescription' placeholder-disabled='Book Description' onChange={addbook_input} />
                            </div>
                            <button className=' btn btn-primary Addbook_button' type='submit' onClick={Addbook_submit}>Submit</button>

                        </div>
                    </div>
                </form>
            </>
        </div>
    )
}
