import React from 'react'
import './Genre.css'
import Navbar from './Navbar'
export default function Genre() {
  return (
    <div>
      <>
      <Navbar/>

      <div className='genre_maincontainer'>
        <div className='row'>
          <div className='col-lg-3'>
            {/* <div className='btn btn-primary'></div> */}
            <button type="button" class="btn btn-light b1">Action</button>
          </div>
          <div className='col-lg-3'>
            {/* <div className='btn btn-primary'></div> */}
            <button type="button" class="btn btn-light b1">Fantasy</button>

          </div>
          <div className='col-lg-3'>
            {/* <div className='btn btn-primary'></div> */}
            <button type="button" class="btn btn-light b1">Fiction</button>
          </div>
          <div className='col-lg-3'>
            {/* <div className='btn btn-primary'></div> */}
            <button type="button" class="btn btn-light b1">Romance</button>
          </div>
          <div className='col-lg-3'>
            {/* <div className='btn btn-primary'></div> */}
            <button type="button" class="btn btn-light b1">Scifi</button>
          </div>
          <div className='col-lg-3'>
            {/* <div className='btn btn-primary'></div> */}
            <button type="button" class="btn btn-light b1">Mystery</button>
          </div>
          <div className='col-lg-3'>
            {/* <div className='btn btn-primary'></div> */}
            <button type="button" class="btn btn-light b1">Thriller</button>
          </div>
          <div className='col-lg-3'>
            {/* <div className='btn btn-primary'></div> */}
            <button type="button" class="btn btn-light b1">Dark fantasy</button>
          </div>
        </div>
      </div>
      
      </>
    </div>
  )
}
