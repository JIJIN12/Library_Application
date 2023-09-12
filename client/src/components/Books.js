import React, { useRef } from 'react'
import './Books.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
export default function Books() {


    const navigate = useNavigate()
    const [books, set_books] = useState([])         //[] is used instead of {} . for map function [] is needed for looping
    console.log(books);
    const [storechecked1, set_storechecked1] = useState({})
    console.log(storechecked1);
    const [checked1, set_checked1] = useState({})
    console.log(checked1);
    const checkbox = useRef()


    const user = localStorage.getItem('username')
    console.log(user)
    
    useEffect(()=>{
        if(user==null){
            navigate('/')
        }
    }, []);

    


    const bookgenre_input = async (event) => {
        if (event.target.checked) {
            set_checked1({ ...checked1, [event.target.name]: event.target.value })
        }
        else {
            console.log("hi");
            delete checked1[event.target.name]
            // set_checked1(checked1)
            axios.post(`http://localhost:2000/book/check`, checked1).then((Response) => {
                console.log(Response);

                set_books(Response.data.details)
                // set_checked1(Response.data.details)

            }).catch((error) => {
                console.log(error);
            })
        }
        // const { name, value } = event.target
        // console.log(name, value);
        // set_checked1({ ...checked1, [name]: value })
    }



    useEffect(() => {
        axios.post(`http://localhost:2000/book/check`, checked1).then((Response) => {
            console.log(Response);

            set_books(Response.data.details)
            // set_checked1(Response.data.details)

        }).catch((error) => {
            console.log(error);
        })



    }, [checked1])      // [] dependency array - [] works in reloading -[checked1] : work only when checked1


    useEffect(() => {
        axios.get('http://localhost:2000/book').then((Response) => {
            set_books(Response.data.details)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const bookdelete = (id) => {
        axios.get(`http://localhost:2000/book/deletebook/${id}`).then((delete_response) => {
            console.log(delete_response);
            window.location.reload()
        })
    }


    return (
        <div>
            <>
                <Navbar />
                <div className='Book-container'>
                    <div className='row Book-container-row1'>
                        <div className='col-lg-1  book-column1'>
                            <div className='Book-container-menu'>
                                <h5 className='Tool-container1-h5'>Filter</h5>


                                <div class="dropdown book-dropdown">
                                    <button class="btn  dropdown-toggle " type="button" data-toggle="dropdown">Genre
                                        {/* <span class="caret"></span> */}
                                    </button>
                                    <ul class="dropdown-menu ">
                                        <li><input type="checkbox" className='book_genre bookgenre_action' name="action" value={"action"} onChange={bookgenre_input} ref={checkbox} />
                                            <label className=' genre' > Action</label></li>
                                        <li><input type="checkbox" className='book_genre bookgenre_fantasy' name="fantasy" value={"fantasy"} onChange={bookgenre_input} ref={checkbox} />
                                            <label className=' genre' > Fantasy</label></li>
                                        <li><input type="checkbox" className='book_genre bookgenre_romance' name="romance" value={"romance"} onChange={bookgenre_input} ref={checkbox} />
                                            <label className=' genre' > Romance</label></li>
                                        <li><input type="checkbox" className='book_genre bookgenre_fiction' name="fiction" value={"fiction"} onChange={bookgenre_input} ref={checkbox} />
                                            <label className=' genre'> Fiction</label></li>
                                        <li><input type="checkbox" className='book_genre bookgenre_scifi' name="scifi" value={"scifi"} onChange={bookgenre_input} ref={checkbox} />
                                            <label className=' genre'  > Si-fi</label></li>
                                        <li><input type="checkbox" className='book_genre bookgenre_mystery' name="mystery" value={"mystery"} onChange={bookgenre_input} ref={checkbox} />
                                            <label className=' genre'> Mystery</label></li>
                                        <li><input type="checkbox" className='book_genre bookgenre_horror' name="horror" value={"horror"} onChange={bookgenre_input} ref={checkbox} />
                                            <label className=' genre' > Horror</label></li>

                                    </ul>
                                </div>


                                <div class="dropdown">
                                    <button class="btn  dropdown-toggle " type="button" data-toggle="dropdown">Availability
                                        {/* <span class="caret"></span> */}
                                    </button>
                                    <ul class="dropdown-menu ">
                                        <li><input type="checkbox" className=' bookgenre_availability' name="instock" value={"instock"} onChange={bookgenre_input} ref={checkbox} />
                                            <label className=' availability' > In stock</label></li>
                                        <li><input type="checkbox" className=' bookgenre_availability' name="outofstock" value={"outofstock"} onChange={bookgenre_input} ref={checkbox} />
                                            <label className=' availability' > Out of stock</label></li>

                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-9 book-column1'>
                            <h1 className='book-h1'>Books</h1>
                            <div className='row'>
                                {storechecked1[0] ?
                                    storechecked1.map((data, key) => (
                                        <Link to='/books/bookview'>
                                            <div className='col-lg-3'>

                                                <div className="card book-card" style={{ width: "18rem" }}>
                                                    <img src={`/image/uploads/${data.image}`} className="card-img-top" alt="..." />
                                                    < div className="card-body" >

                                                        <h4 className="card-title">{data.bookname}</h4>
                                                        <p className="card-text1"><b>Username</b> : {data.username}</p>
                                                        <p className="card-text1"><b>author</b> : {data.author}</p>
                                                        <p className='card-text1'><b>Genre</b>: {data.bookgenre}</p>

                                                        <p className="card-text2"><b>Book Description</b>: {data.bookdescription}</p>
                                                        <a href={`/books/editbook/${data._id}`} className="btn btn-primary ">
                                                            Edit
                                                        </a>
                                                        <a href="#" className="btn btn-primary bookbutton1" onClick={() => { bookdelete(data._id) }}>
                                                            delete
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </Link>
                                    ))
                                    : //else
                                    books.map((data, key) => (

                                        <div className='col-lg-3'>
                                            <div className="card book-card" style={{ width: "18rem" }}>
                                                <img src={`/image/uploads/${data.image}`} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h4 className="card-title">{data.bookname}</h4>
                                                    <p className="card-text1"><b>author</b> : {data.author}</p>
                                                    <p className='card-text1'><b>Genre</b>: {data.bookgenre}</p>

                                                    <p className="card-text2"><b>Book Description</b>: {data.bookdescription}</p>
                                                    <a href={`/books/editbook/${data._id}`} className="btn btn-primary ">
                                                        Edit
                                                    </a>
                                                    <a href="#" className="btn btn-primary bookbutton1" onClick={() => { bookdelete(data._id) }}>
                                                        delete
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                        </div>

                        <div className='col-lg-2 book-column1'>
                            <div class="dropdown column3-dropdown">
                                <button class="btn btn-dark dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a href="/books/addbooks" class="dropdown-item">Add book</a></li>
                                    <li><a href="/books/addbooks" class="dropdown-item">New book</a></li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}
