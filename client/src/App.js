import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Books from './components/Books';
import Addbook from './components/Addbook';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Authors from './components/Authors';
import Addauthor from './components/Addauthor';
import Editbook from './components/Editbook';
import Editauthor from './components/Editauthor';
import Thriller from './components/Thriller';
import Genre from './components/Genre';
import Profile from './components/Profile';
import Bookview from './components/Bookview';
import Codegenerator from './components/Codegenerator';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>} />
          <Route path='/books' element={<Books/>} />
          <Route path='/books/addbooks' element={<Addbook/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/authors' element={<Authors/>} />
          <Route path='/authors/addauthor' element={<Addauthor/>} />
          <Route path='/books/editbook/:bookid' element={<Editbook/>} />
          <Route path='/authors/editauthor/:authorid' element={<Editauthor/>} />
          <Route path='/books/:genre' element={<Thriller/>} />
          <Route path='/genre' element={<Genre/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/books/bookview/:bookid' element={<Bookview/>} />
          <Route path='/quote' element={<Codegenerator/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
