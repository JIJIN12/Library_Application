import React, { useState } from 'react'
import './Addauthor.css'
import axios from 'axios'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
export default function Addauthor() {
    const [addauthor, set_addauthor] = useState({})
    const[file,set_file] = useState()                                 //to add file
    const navigate = useNavigate()
    console.log(file);
    console.log(addauthor);
    const addauthor_input = (event) => {
        const { name, value } = event.target
        set_addauthor({ ...addauthor, [name]: value })
    }
    const submit = (event) => {
        event.preventDefault()
        if(file){                                                           // to add file -
            const data = new FormData()                                    
            const filename = file.name
            data.append("name",filename)
            data.append("file",file)
            
            axios.post('http://localhost:2000/author/uploads',data).then((Response)=>{
                console.log(Response);
            }).catch((error)=>{
                console.log(error);                                                           //-to add file
            })
        }
        axios.post('http://localhost:2000/author/addauthor',addauthor).then((Response)=>{
            navigate('/authors')
            console.log(Response);
        }).catch((error)=>{
            console.log(error);                                                           //-to add file
        })
    }
       
    


    return (
        <div>
            <>
                <Navbar />
                <div className='Addauthor'>
                    <div className="Addauthor-form-container ">

                        <form className='addauthor-form'>
                            <div className='addauthor-header'>
                                <h2>Add Author</h2>

                            </div><br /><br />
                          

                            <div className="Addauthor-form-group">
                                <label htmlFor="Book_title">Author Name   : </label><br />
                                <input type='text'
                                    id="Book_title"
                                    name="authorname"
                                    className='addauthor-input'
                                    // rows={4}
                                    required=""
                                    onChange={addauthor_input}
                                    defaultValue={""}
                                />
                            </div>
                            <div className="Addauthor-form-group">
                                <label htmlFor="Book_title">Author's Book   : </label><br />
                                <input type='text'
                                    id="Book_title"
                                    className='addauthor-input'
                                    name="authorbook"
                                    // rows={4}
                                    required=""
                                    onChange={addauthor_input}
                                    defaultValue={""}
                                />
                            </div>
                            <div className="Addauthor-form-group">
                                <label htmlFor="Book_title">Author's Image  : </label><br />
                                <input type='file'
                                    className='addauthor-input'
                                    id="Book_title"
                                    name="authorimage"
                                    // rows={4}
                                    required=""
                                    onChange={(e)=>{set_file(e.target.files[0]); set_addauthor({...addauthor,authorimage:e.target.files[0].name})}}                //to add file
                                    defaultValue={""}
                                />
                            </div>
                            <div className="Addauthor-form-group">
                                <label htmlFor="Book_genre"> Book Genre   : </label><br />
                                <input type='text'
                                    id="Book_genre"
                                    className='addauthor-input'
                                    name="authorgenre"
                                    // rows={4}
                                    required=""
                                    onChange={addauthor_input}
                                    defaultValue={""}
                                />
                            </div>



                            <div className="Addauthor-form-group">
                                <label htmlFor="Book_title">Author Description  : </label><br />
                                <input type='text'
                                    id="Book_title"
                                    className='addauthor-input'
                                    name="authordescription"
                                    // rows={4}
                                    required=""
                                    onChange={addauthor_input}
                                    defaultValue={""}
                                />
                            </div>
                            <button className='btn btn-primary' type="button" onClick={submit}>Submit</button>
                        </form>
                    </div>

                </div>
            </>
        </div>
    )
}
