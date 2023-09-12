import React, { useEffect, useState } from 'react'
import './Bookview.css'
import Navbar from './Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export default function Bookview() {
    const { bookid } = useParams()
    const [bookview, set_bookview] = useState({})
    console.log(bookview);
    useEffect(() => {
        axios.get(`http://localhost:2000/book/bookview/${bookid}`).then((Response) => {
            set_bookview(Response.data.details)
        })
    },[])
    return (
        <div>
            <Navbar />

            <div className='row bookview_container'>
                <div className='col'>
                    <div className='row sub_bookview_container'>
                        <div className='col-lg-5 cell' id='cell1'>
                            <img
                                src='./image/img1.jpg'
                                width={300}
                                height={440}
                            />
                        </div>
                        <div className='col-lg-5 cell' id='cell2'>
                            <h2>bookname</h2>
                            <p style={{ color: "red", fontSize: "large" }}>Author : </p>
                            <p>Availability</p>
                            <br /><br />
                            <p>book description

                            </p>

                            <a className='btn  bookcart' href='#'>Add to Cart</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
