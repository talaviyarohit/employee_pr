import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componets/Header/Header';
import { Route, Routes } from 'react-router';
import Home from './Componets/Home/Home';
import AddData from './Componets/AddData/AddData';
import Edit from './Componets/Edit/Edit';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Routes>
        <Route path='/' element={<Home/>}  />
        <Route  path='/adddata' element={<AddData/>} />
        <Route path='/edit/:id' element={<Edit/>} />

     </Routes>

    </>
  )
}

export default App
