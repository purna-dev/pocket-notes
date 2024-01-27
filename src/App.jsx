import React,{useEffect} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import NotesPage from './pages/NotesPage/NotesPage'


function App() {




  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/notes' element={<NotesPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App