import {useState} from 'react'
import style from './Notes.module.css'
import Sidebar from '../Sidebar/Sidebar'
import NotesTab from '../NotesTab/NotesTab'
import ModelCard from '../ModelCard/ModelCard'
function Notes({groupdata,location}) {


  let [isModel,setisModel] = useState(null);
  let [isupdated,setisupdated] = useState('');


  const handleModel = (model)=>{

    console.log(model)
    setisModel(model)
  

  }

  
  const updatedLocaldata = (isupdated) => {
    // console.log(isupdated)
    console.log(isupdated)
    setisupdated(isupdated)
  }

  
  
  

  return (
    <>
        <div className={style.notes}>
    
        

        <div className={style.desktop_view}>
        <Sidebar  handlemodel={handleModel} isupdated={isupdated} />

        </div>
        
        
        <NotesTab groupdata={groupdata} location={location}/>

        

        </div>
        {isModel?<ModelCard handlemodel={handleModel} updatedlocaldata={updatedLocaldata}  />:<></>}
    </>
  )
}

export default Notes