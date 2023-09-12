import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className='row navbar-title'>
                    <div className='col-lg-2'>
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <img
                                    src="./image/nav-img.png"
                                    alt="Logo"
                                    width={30}
                                    height={24}
                                    className="d-inline-block align-text-top"
                                />
                                <b>Library</b>
                            </a>
                        </div>

                    </div>

                    <div className='col-lg-4 '>
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid ">
                                {/* <a className="navbar-brand" href="#">
                                    Library
                                </a> */}
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse book-navbarlist" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="/">
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/books">
                                                Books
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link active" href="/authors">
                                                Authors
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Browse
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/books/action">
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/books/fantasy">
                                                        Fantasy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Sci-fi
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Classic
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/books/thriller">
                                                        Thriller
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/genre">
                                                        Other
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/quote">
                                                        Quotes
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        Text books
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>

                    </div>

                    <div className='col-lg-3 book-searchbar'>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>


                    </div>

                    <div className='col col-button'>
                        <div className='row'>
                            <div className='col'>
                                <a href="/signup" class="btn btn-light Homepage">Register</a>
                            </div>
                            <div className='col'>
                                <a href="/" class="btn btn-primary Homepage">Signin</a>
                            </div>
                            <div className='col acclogo'>
                                <a className="navbar-brand" href="/profile">
                                    <img
                                        src="./image/accountlogo.png"
                                        alt="Logo"
                                        width={35}
                                        height={44}
                                        className="d-inline-block align-text-top"
                                    />
                                </a>

                                <span
                                    id="boot-icon"
                                    className="bi bi-cart2"
                                    style={{ fontSize: 93, color: "rgb(225, 0, 0)", WebkitTextStrokeWidth: 0 }}
                                />


                            </div>
                        </div>

                    </div>
                </div>



            </nav>

        </div>
    )
}
