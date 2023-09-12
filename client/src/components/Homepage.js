import React, { useEffect } from 'react'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
const navigate =useNavigate()
const user = localStorage.getItem('username')
console.log(user);

useEffect(()=>{
    if(user==null){
        navigate('/')
    }
},[])


    return (
        <div>
            <>
                <div className='row Homepage'>
                    <div className='col-lg-12'>
                        <h1>Welcome to Library</h1>
                        <h3 className='Homepage-h3'>ACCESS TO THOUSANDS OF FREE E-BOOKS <br />  READ OR DOWNLOAD ONLINE</h3>

                    </div>
                    <div className='Homepage-content2'>
                        <div className='Homepage-content2-1'>
                            <h3 className='Homepage-content2-1_h3'>Welcome to Library</h3>
                            <h6>Listing 3000+  books in more than 30 languages. Read online or download in PDF.</h6>
                        </div>
                    </div>


                    <div className='Homepage-content3'>
                        <h3>Overview</h3>
                        <p>we believe in the power of books, the thrill of discovery, and the joy of learning. Our digital haven is more than just a repository of information; it's a vibrant community hub where readers, learners, and thinkers come together to explore, connect, and grow.</p>

                        <h3>About us</h3>
                        <h5> Discover a World of Possibilities:</h5>   
                        <p>Step into our virtual shelves and unlock a treasure trove of literary wonders. From timeless classics to contemporary gems, our curated collection spans genres, cultures, and ages. Whether you're seeking an adventure, a life lesson, or a glimpse into history, you're bound to find it here.</p>    

                        <h5> Digital Delights Await:</h5>  
                        <p>Explore beyond the bounds of printed pages with our extensive digital resources. Dive into the immersive world of ebooks, embark on a journey with audiobooks, and dive deep into knowledge with our array of online databases and research materials. The realm of knowledge knows no boundaries, and neither do we.</p>   

                        <h5>Join Our Literary Community:</h5> 
                        <p>Membership at Library opens doors to endless possibilities. Borrow your favorite books, access exclusive digital resources, and connect with fellow enthusiasts who share your love for reading and learning.</p>  

                    
                    </div>



                    <div className='caro1'>
                        <div id="carouselExample1" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./image/img2.jpg" className="d-block  img2" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./image/img3.jpg" className="d-block  img3" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./image/img4.jpg" className="d-block  img4" alt="..." />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExample1"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next "
                                type="button "
                                
                                data-bs-target="#carouselExample1"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" 
                                
                                />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>



                    <div className='caro2'>
                        <h4>Trending</h4>
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner caro1-inner">
                                <div className="carousel-item active">
                                    <div className='homepage-grid1'>
                                        <div className='grid-item1'>
                                            <img src='./image/img4.jpg' className='grid-item1-img' /><br /><br />
                                            <button type="button" class="btn btn-primary">Borrow</button>
                                        </div>
                                        <div className='grid-item1'>
                                            <img src='./image/img2.jpg' className='grid-item1-img' /><br /><br />
                                            <button type="button" class="btn btn-primary">Borrow</button>
                                        </div>
                                        <div className='grid-item1'>
                                            <img src='./image/img4.jpg' className='grid-item1-img' /><br /><br />
                                            <button type="button" class="btn btn-primary">Borrow</button>
                                        </div>
                                        <div className='grid-item1'>
                                            <img src='./image/img4.jpg' className='grid-item1-img' /><br /><br />
                                            <button type="button" class="btn btn-primary">Borrow</button>
                                        </div>
                                        <div className='grid-item1'>
                                            <img src='./image/img4.jpg' className='grid-item1-img' /><br /><br />
                                            <button type="button" class="btn btn-primary">Borrow</button>
                                        </div>
                                        <div className='grid-item1'>
                                            <img src='./image/img4.jpg' className='grid-item1-img' /><br /><br />
                                            <button type="button" class="btn btn-primary">Borrow</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='homepage-grid1'>
                                        <div className='grid-item1'>
                                            <img src='./image/img1.jpg' className='grid-item1-img' /><br /><br />
                                            <button type="button" class="btn btn-primary">Borrow</button>
                                        </div>
                                        <div className='grid-item1'>
                                            <img src='./image/img2.jpg' className='grid-item1-img' /><br /><br />
                                            <button type="button" class="btn btn-primary">Borrow</button>
                                        </div>
                                        <div className='grid-item1'>
                                            <img src='./image/img3.jpg' className='grid-item1-img' /><br /><br />
                                            <button type="button" class="btn btn-primary">Borrow</button>
                                        </div>
                                        <div className='grid-item1'>
                                            <img src='./image/img4.jpg' className='grid-item1-img' /><br /><br />
                                            <button type="button" class="btn btn-primary">Borrow</button>
                                        </div>
                                        <div className='grid-item1'>
                                            <img src='./image/img2.jpg' className='grid-item1-img' /><br /><br />
                                            <button type="button" class="btn btn-primary">Borrow</button>
                                        </div>
                                        <div className='grid-item1'>
                                            <img src='./image/img3.jpg' className='grid-item1-img' /><br /><br />
                                            <button type="button" class="btn btn-primary">Borrow</button>
                                        </div>

                                    </div>                                </div>

                            </div>
                            <button
                                className="carousel-control-prev "
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>





                </div>
            </>
        </div >
    )
}
