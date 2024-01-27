import {useEffect} from 'react'
import Notes from '../../components/Notes/Notes'
import { useLocation,useNavigate } from 'react-router-dom'

function NotesPage() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{
    // if(location.key){
    //   console.log('null data')
    //   return navigate('/')
      
    // }
    console.log(location)
     
  },[location])


  return (
    <>
        <Notes groupdata={location.state} location={location} />
    </>
  )
}

export default NotesPage