import {useState,useEffect} from 'react'
import style from './NotesTab.module.css'
import submit from '../../assets/submit.png'
import NoteCard from '../NoteCard/NoteCard'
import back_arrow from '../../assets/back_arrow.png'
import { useNavigate,Navigate } from 'react-router-dom'

function NotesTab({groupdata,location}) {
  // console.log(notecheck)
  // console.log(groupdata)

  const navigate = useNavigate()
  

  let [newVal,setnewVal] = useState('')
  let [notesDetails,setnotesDetails] = useState([])
  let [isValid,setisValid] = useState(false) 
  let [hasnote,sethasnote] = useState(true)
  let [enablebtn,setenablebtn] = useState('');

  //testing
  let [notfound,setnotfound] = useState(false)



  
  const handleChange = (e)=>{
    let textNote = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
      console.log(textNote)
    //  setnotesDetails({...notesDetails,note:textNote.trim()})

      setnewVal(textNote)
  }

  


  const handleSubmit = (e)=>{
    
    if(newVal !== ''){
     setisValid((pre)=>true)

      const date = new Date()
      const formateDate = date.toDateString()
      const newDate = formateDate.split(' '); 
      const newformatedate = newDate[2]+' '+newDate[1]+' '+newDate[3]

      const formatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' });
      const formattedTime = formatter.format(date);
    //  setnotesDetails({...notesDetails,date:newformatedate,time:formattedTime})
       
       let oldnotes = JSON.parse(localStorage.getItem(groupdata.groupName))
       localStorage.setItem(groupdata.groupName,JSON.stringify([...oldnotes,{
        date:newformatedate,
        time:formattedTime,
        note:newVal.trim()
       }]))
       setnewVal('')
    }
    // if(isValid){
    //   let oldnotes = JSON.parse(localStorage.getItem(groupdata.groupName))
    //   localStorage.setItem(groupdata.groupName,JSON.stringify([notesDetails]))
  
    // }

  }

  const handleEnter = (e)=>{
    // console.log(e.target.value.trim().length)
    setenablebtn(e.target.value.trim().length)
    // console.log(enablebtn)
      
      if(e.code ==='Enter' && e.target.value.trim() !== '' ){

        e.preventDefault();
        // setenablebtn(e.target.value.trim())
          // console.log(enablebtn)
          if(newVal !== ''){
            setisValid((pre)=>true)
       
             const date = new Date()
             const formateDate = date.toDateString()
             const newDate = formateDate.split(' '); 
             const newformatedate = newDate[2]+' '+newDate[1]+' '+newDate[3]
       
             const formatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' });
             const formattedTime = formatter.format(date);
           //  setnotesDetails({...notesDetails,date:newformatedate,time:formattedTime})
              
              let oldnotes = JSON.parse(localStorage.getItem(groupdata.groupName))
              localStorage.setItem(groupdata.groupName,JSON.stringify([...oldnotes,{
               date:newformatedate,
               time:formattedTime,
               note:newVal.trim()
              }]))
              setnewVal('')
           }
      }
  }


  const handleBack = ()=>{
    navigate('/')
  }

  if(groupdata === null){
    console.log('null data found 404')
    console.log(location)
    if(!location.state) return <Navigate to='/' replace={true}/>

    // setnotfound(true)
    // localStorage.setItem('groups',JSON.stringify([]))
    // if(JSON.parse(localStorage.getItem('groups'))){
    //   if(!JSON.parse(localStorage.getItem('groups')).length){
    //       navigate('/')
    //   }

    // }

    
  }
  
  let newAr = groupdata.groupName.split(' ')
  
  

  

 

  useEffect(()=>{
// console.log(notesDetails);


if(!localStorage.getItem(groupdata.groupName)){
  

    if(!localStorage.getItem('groups')){
      navigate('/')
    }else{
      localStorage.setItem(groupdata.groupName,JSON.stringify([]))
    }



}else{
  
  setnotesDetails(JSON.parse(localStorage.getItem(groupdata.groupName)))
  setisValid(false)

}



if(localStorage.getItem('groups')){
  let x=JSON.parse(localStorage.getItem(groupdata.groupName))
  console.log(x.length)
  if(!x.length){
    sethasnote(false)
  
  }else{
    sethasnote(true)
  }
}

console.log(notesDetails)






    
  },[groupdata.groupName,isValid])

  return (
    <div className={style.tab}>

    <div className={style.tab_head}>

    <div className={style.back_arrow} onClick={handleBack}>
      <img src={back_arrow} />
    </div>

   

    {
      groupdata.groupName?
      <>
      <div style={{width:'52px',height:'52px',backgroundColor:`${groupdata.Color}`,color:'white',borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'1.2rem',
        fontWeight:'500',
        letterSpacing:'0.03rem'
    
    }} >

      {newAr[1]?newAr[0].charAt(0).toUpperCase()+newAr[1].charAt(0).toUpperCase():newAr[0].charAt(0).toUpperCase()}

    </div>

    <div className={style.head_title}>{groupdata.groupName}</div>
    </>
      :
    <></>
    }

    

    </div>

    

    {
      hasnote
      ?
      <div className={style.tab_body}>
      {notesDetails.length? notesDetails.map((note,i)=>(<NoteCard note={note} groupname={groupdata.groupName} key={i+'cvf'+3} />))   :<></>}
      </div>
      :
      <div className={style.tab_body}>

      </div>
    }



    <div className={style.tab_box}>
    <textarea onChange={handleChange} onKeyUp={(e)=>handleEnter(e)} value={newVal} placeholder='Enter your text here...........'/>

    <button className={newVal.length === 0||enablebtn===0?style.disabledButton:style.enabledButton} disabled={newVal.length === 0} onClick={handleSubmit}>
    
      <img src={submit}/>
    
    </button>

    </div>
    
    
    </div>
  )
}

export default NotesTab