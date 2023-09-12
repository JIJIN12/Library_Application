import React, { useEffect, useState } from 'react'
import './Thriller.css'
import Navbar from './Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Thriller() {

    const {genre} = useParams()

    const [thriller, set_thriller] = useState([])
    console.log(thriller);

    const bookdelete = (id) => {
        axios.get(`http://localhost:2000/book/deletebook/${id}`).then((delete_response) => {
            console.log(delete_response);
            window.location.reload()
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:2000/book/${genre}`).then((Response) => {
            console.log(Response);
            set_thriller(Response.data.details)
        }).catch((error) => {
            console.log(error);
        })
    },[])


    return (
        <div>
            <Navbar data={genre}/>
            


            {/* <p class="d-inline-flex gap-1 gii">
                <a class="btn btton" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Wind Breaker is a manhwa about cycling and friendship12.  more
                </a>

            </p>
            <div class="collapse" id="collapseExample">

                <div class="columnd">
                    It follows the story of Jay, a smart and brilliant cyclist who is the student president of Taeyang High32. Jay joins the school’s biking team, the Hummingbird Crew, and experiences different adventures, challenges, and relationships with his friends and rivals13                </div>
            </div> */}

            <h1>{genre=='fantasy'?"Fantasy":genre=='action'?"Action":" "}</h1>


            <div className='row thriller-container'>
                <div className='col-lg-8'>
                    <div className='row thriller-subconatiner'>
                        {thriller.map((data, key) =>
                            <div className='col-lg-4'>
                                

                                <div className="card thriller-card" style={{ width: "18rem" }}>
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
