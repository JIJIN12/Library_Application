import React, { useEffect, useState } from 'react'
import './Profile.css'

import Navbar from './Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export default function Profile() {

  const [profile, set_profile] = useState({})
  console.log(profile);

  const [bookname, setbookname] = useState([])
  console.log(bookname);

  const id = localStorage.getItem('userId')
  console.log(id);

  const username = localStorage.getItem('username')
  console.log(username);

  const [section, setSection] = useState({
    profile: true,
    work: false,
    editProfile: false,
    deleteProfile: false
  })

  const onprofile = (e) => {
    setSection({
      profile: true,
      work: false,
      editProfile: false,
      deleteProfile: false
    })
    axios.get(`http://localhost:2000/profile/${id}`).then((Response) => {
      console.log(Response);
      console.log('jfjjfjfj');
      set_profile(Response.data.details)
    }).catch((error) => {
      console.log(error);
    })
  }

  const onwork = (e) => {
    setSection({
      profile: false,
      work: true,
      editProfile: false,
      deleteProfile: false
    })
    axios.get(`http://localhost:2000/profile/work/${username}`).then((Response) => {
      console.log('hhh');
      console.log(Response.data.details);
      setbookname(Response.data.details)

    }).catch((error) => {
      console.log(error);
    })
  }

  const onedit = () => {
    setSection({
      profile: false,
      work: false,
      editProfile: true,
      deleteProfile: false
    })
    // axios.get(`http://localhost:2000/profile/edit/${id}`).then((Response) => {
    //   set_profile(Response.data.details)
    // }).catch((error) => {
    //   console.log(error);
    // })

  }

  const ondelete = () => {
    setSection({
      profile: false,
      work: false,
      editProfile: false,
      deleteProfile: true
    })

  }




  return (
    <div>
      <Navbar />



      <div className='Profile-container'>
        <div className='h1-profile'>
          <h1>User Profile</h1>
        </div>
        <div className='row profile-row'>
          <div className='col-lg-4 profile-col-1'>
            <div class="list-group list-profile">
              <h2 className='Profile-name'>USERNAME</h2>

              <a href="#" class="list-group-item list-group-item-action " onClick={onprofile}>
                Profile
              </a>
              <a href="#" class="list-group-item list-group-item-action" onClick={onwork}>work</a>
              <a href="#" class="list-group-item list-group-item-action" onClick={onedit} >Edit Profile</a>
              <a href="#" class="list-group-item list-group-item-action" onClick={ondelete}>Delete Profile</a>
            </div>



          </div>

          {section.profile ?
            <div className='col-lg-4 profile-col-2'>
              <h3>About</h3>
              <p><b>Full Name</b>:{profile.Name}</p>
              <p>Email: {profile.Email}</p>
              <p>Favorite Genres:</p>
              <p>Preferred Language:</p>

            </div> :
            section.work ?
              <div className='col-lg-4 profile-work'>
                <h3>works</h3>
                <h5>Book uploaded</h5>
                <p>Number of book uploaded:{bookname.length}</p><br />
                <h5>Book Details</h5>
                {bookname.map((data, key) => (
                  <p>Book name:{data.author}</p>

                ))}
              </div> :
              section.editProfile ?
                <div className='col-lg-4 edit-profile'>

                  <table className='profiletable-edit'>
                    <h3>Edit Profile</h3>
                    <tr>
                      <td>
                        <label>Full Name</label>
                      </td>
                      <td>
                        <input type='text' className='full-name' /><br />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <label>Email</label>
                      </td>
                      <td>
                        <input type='text' className='Profile-email' /><br />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Favourite Genre</label>
                      </td>
                      <td>
                        <input type='text' className='Fav-genre' /><br />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label >Preferred language</label>
                      </td>
                      <td>
                        <input type='text' className='pref-lang' /><br />
                      </td>
                    </tr>
                  </table>
                  <button>Submit</button>
                </div> :
                section.deleteProfile ?
                  <div className='col-lg-4 profile-delete'>
                    <p>Are you sure yo want to delete your account</p>
                    <button>Delete Account</button>
                  </div> :
                  ""
          }



        </div>
      </div>

    </div>
  )
}
