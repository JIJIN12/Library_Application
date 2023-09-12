import React, { useState } from 'react'
import './Code.css'
import axios from 'axios'
import Navbar from './Navbar';
export default function Codegenerator() {

  const [quote, set_quote] = useState('')
  console.log(quote);

  const getquote = () => {
    axios.get('https://api.quotable.io/random').then((Response) => {
      set_quote(Response.data)
    })
  }


  return (
    <div>
      <Navbar/>
      <div className='generator'>
        <div className='quotes'>
          <p className='quote_para'>  {quote.content}</p>
          <p className='quote_para paraprofile'>-{quote.author}</p>
          <button className='btn btn-primary quote_button' onClick={getquote}>New quote</button>
        </div>
      </div>
    </div>
  )
}
