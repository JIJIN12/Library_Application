import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Editauthor.css'
import Navbar from './Navbar'
import { useNavigate, useParams } from 'react-router-dom'
export default function Editauthor() {

    const [editauthor, set_editauthor] = useState({})
    const [file, set_file] = useState('')
    const { authorid } = useParams()                       // "id" that is  in use params (appear to be a object ) should be put in "{}"
    // console.log(editauthor);
    console.log(file);
    const navigate = useNavigate()

    const editauthor_input = (event) => {
        const { name, value } = event.target
        set_editauthor({ ...editauthor, [name]: value })
    }
    const editauthor_submit = async (event) => {
        event.preventDefault()
        if (file) {
            const data = new FormData()
            const filename = file.name
            data.append('name', filename)
            data.append('file', file)

            axios.post(`http://localhost:2000/author/uploads`, data).then((Response) => {
                console.log(Response);
            }).catch((error) => {
                console.log(error);
            })
        }
        axios.post(`http://localhost:2000/author/updateauthor`,editauthor).then((Response)=>{
                navigate('/authors')
                console.log(Response);
            }).catch((error)=>{
                console.log(error);
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:2000/author/editauthor/${authorid}`).then((Response) => {
            console.log(Response);
            set_editauthor(Response.data.details)
        })
    }, [])
    return (
        <div>
            <>
                <Navbar />

                <form className='editauthor-form'>
                    <div className='editauthor1'>
                        <div className='editauthor2'>
                            <div className='editauthor2-h2'>
                                <h1 >editauthor</h1>
                            </div>

                            <div className='editauthor2-1'>
                                <label>Author Name</label><br />
                                <input type='text' className='editauthor2-1_input1' name='authorname' value={editauthor.authorname} placeholder-disabled='Book Name' onChange={editauthor_input} />
                            </div>
                            <div className='editauthor2-1'>
                                <label>Image</label><br />
                                <input type='file' className='editauthor2-1_input1' name='authorimage' placeholder-disabled='Image'
                                    onChange={(e) => { set_file(e.target.files[0]); set_editauthor({ ...editauthor, authorimage: e.target.files[0].name }) }}
                                />
                            </div>
                            <div className='editauthor2-1'>
                                <label>Author book</label><br />
                                <input type='text' className='editauthor2-1_input1' name='authorbook' value={editauthor.authorbook} placeholder-disabled='Author' onChange={editauthor_input} />
                            </div>
                            <div className='editauthor2-1'>
                                <label>Genre</label><br />
                                <input type='text' className='editauthor2-1_input1' name='authorgenre' value={editauthor.authorgenre} placeholder-disabled='Author' onChange={editauthor_input} />
                            </div>
                            <div className='editauthor2-1'>
                                <label>Book Description</label><br />
                                <input type='text' className='editauthor2-1_input1' name='authordescription' value={editauthor.authordescription} placeholder-disabled='Book Description' onChange={editauthor_input} />
                            </div>
                            <button className=' btn btn-primary editauthor_button' type='submit' onClick={editauthor_submit}>Submit</button>

                        </div>
                    </div>
                </form>
            </>
        </div>
    )
}
