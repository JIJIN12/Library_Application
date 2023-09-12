import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Editbook.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function Editbook() {
    const { bookid } = useParams()
    // console.log(bookid);
    const [editbook, set_editbook] = useState({})
    const [file, set_file] = useState('')
    // console.log(editbook);
    const navigate = useNavigate()
    const editbook_input = (event) => {
        const { name, value } = event.target
        set_editbook({ ...editbook, [name]: value })
    }
    const editbook_submit = async (event) => {
        event.preventDefault()
        try {
            if (file) {
                const data = new FormData()
                const filename = file.name
                data.append("name", filename)
                data.append("file", file)
                axios.post(`http://localhost:2000/book/uploads`, data).then((Response) => {
                    console.log(Response);
                }).catch((error) => {
                    console.log(error);
                })
            }
            axios.post(`http://localhost:2000/book/updatebook`, editbook).then((Response) => {
                navigate('/books')
            }).catch((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:2000/book/editbook/${bookid}`).then((Response) => {
            console.log(Response);
            set_editbook(Response.data.details)
        }).catch((error)=>{
            console.log(error);
        })
    }, [])
    return (
        <div>
            <>
                <Navbar />

                <form className='editbook-form'>
                    <div className='editbook1'>
                        <div className='editbook2'>
                            <div className='editbook2-h2'>
                                <h1 >editbook</h1>
                            </div>


                            <div className='editbook2-1'>
                                <label>UserName</label><br />
                                <input type='text' className='editbook2-1_input1' name='username' value={editbook.username} placeholder-disabled='Book Name' onChange={editbook_input} />
                            </div>
                            <div className='editbook2-1'>
                                <label>Book Name</label><br />
                                <input type='text' className='editbook2-1_input1' name='bookname' value={editbook.bookname} placeholder-disabled='Book Name' onChange={editbook_input} />
                            </div>
                            <div className='editbook2-1'>
                                <label>Image</label><br />
                                <input type='file' className='editbook2-1_input1' name='image'  placeholder-disabled='Image'
                                    onChange={(e) => { set_file(e.target.files[0]); set_editbook({ ...editbook, image: e.target.files[0].name }) }}
                                />
                            </div>
                            <div className='editbook2-1'>
                                <label>Author</label><br />
                                <input type='text' className='editbook2-1_input1' name='author' value={editbook.author} placeholder-disabled='Author' onChange={editbook_input} />
                            </div>
                            <div className='editbook2-1'>
                                <label>Genre</label><br />
                                <input type='text' className='editbook2-1_input1' name='bookgenre' value={editbook.bookgenre} placeholder-disabled='Author' onChange={editbook_input} />
                            </div>
                            <div className='editbook2-1'>
                                <label>Book Description</label><br />
                                <input type='text' className='editbook2-1_input1' name='bookdescription' value={editbook.bookdescription} placeholder-disabled='Book Description' onChange={editbook_input} />
                            </div>
                            <button className=' btn btn-primary editbook_button' type='submit' onClick={editbook_submit}>Submit</button>

                        </div>
                    </div>
                </form>
            </>
        </div>
    )
}
