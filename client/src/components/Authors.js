import React, { useEffect, useState } from 'react'
import './Author.css'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Authors() {
    const navigate = useNavigate()
    const [author, set_author] = useState([])
    console.log(author);

    const user = localStorage.getItem('username')
    console.log(user)

    useEffect(() => {
        if (user == null) {
            navigate('/')
        }
    }, []);

    const deleteauthor = (id) => {
        console.log('delete', id);
        axios.get(`http://localhost:2000/author/deleteauthor/${id}`).then((Response) => {
            console.log(Response);
            window.location.reload()
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:2000/author`).then((Response) => {
            console.log(Response);
            set_author(Response.data.details)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <div>
            <>
                <Navbar />
                <div className='Author'>
                    <div className='row Author-row'>
                        <div className='col-lg-2 author-column1'>
                            <div className='Author-menu'>
                                <h5 className='Author-menu-h5'>Filter</h5>


                                <div class="dropdown Author-dropdown">
                                    <button class="btn  dropdown-toggle " type="button" data-toggle="dropdown">Genre
                                        {/* <span class="caret"></span> */}
                                    </button>
                                    <ul class="dropdown-menu ">
                                        <li><input type="checkbox" className=' author_genre authorgenre_action' name="Action" />
                                            <label className=' genre' > Action</label></li>
                                        <li><input type="checkbox" className='author_genre authorgenre_fantasy' name="Fantasy" />
                                            <label className=' genre' > Fantasy</label></li>
                                        <li><input type="checkbox" className='author_genre authorgenre_romance' name="Romance" />
                                            <label className=' genre' > Romance</label></li>
                                        <li><input type="checkbox" className='author_genre authorgenre_fiction' name="Fiction" />
                                            <label className=' genre'> Fiction</label></li>
                                        <li><input type="checkbox" className='author_genre authorgenre_scifi' name="Sci_fi" />
                                            <label className=' genre'  > Si-fi</label></li>
                                        <li><input type="checkbox" className='author_genre authorgenre_mystery' name="Mystery" />
                                            <label className=' genre'> Mystery</label></li>
                                        <li><input type="checkbox" className='author_genre authorgenre_horror' name="Horror" />
                                            <label className=' genre' > Horror</label></li>
                                    </ul>
                                </div>


                                {/* <div class="dropdown">
                                    <button class="btn  dropdown-toggle " type="button" data-toggle="dropdown">Availability
                                        <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu ">
                                        <li><a href="#">In stock</a></li>
                                        <li><a href="#">Out od stock</a></li>

                                    </ul>
                                </div> */}
                            </div>
                        </div>

                        <div className='col-lg-9 author-column2'>
                            <h1 className='book-h1'>Author</h1>
                            <div className='row'>
                                {author.map((data, key) =>
                                    <div className='col-lg-3'>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src={`/image/uploads/${data.authorimage}`} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h4 className="card-title"><b>{data.authorname}</b></h4>                                                <p className="card-text">Author Book  :{data.authorbook}</p>
                                                <p className="card-text"><b>Author Description </b>: {data.authordescription}</p>
                                                {/* <p className="card-text">{data.authorimage}</p> */}
                                                <p className='card-text'><b>Genre</b> : {data.authorgenre}</p>
                                                <a href={`/authors/editauthor/${data._id}`} className="btn btn-primary ">
                                                    Edit
                                                </a>
                                                <a href="#" className="btn btn-primary author-button" onClick={() => { deleteauthor(data._id) }}>
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className='col-lg-1 author-column3'>
                            <div class="dropdown author-column3-dropdown">
                                <button class="btn btn-dark dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a href="/authors/addauthor" class="dropdown-item">Add Author</a></li>


                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}
