import {useEffect,useState,useRef} from 'react'
import style from './Sidebar.module.css'
import Button from '../Button/Button'
import GroupCard from '../GroupCard/GroupCard'
import { useNavigate } from 'react-router-dom'
import ModelCard from '../ModelCard/ModelCard';

function Sidebar({handlemodel,isupdated}) {

  let [groupsdata,setgroupsdata] = useState([]);
  const groupCard = useRef()

  const navigate = useNavigate()
  let ismodeltrue = false;
  
  
  // let isnewdata =false;
  // isnewdata = isupdated

  // console.log(groupsdata)

  const handleAdd = (e)=>{
    // console.log(e)
    ismodeltrue = true
  handlemodel(ismodeltrue)

  }

  const handleGroupclick = (groupdata)=>{
    // console.log(groupdata)
    
    if(groupdata){
      navigate('/notes',{state:groupdata})
    }else{
      navigate('/notes',{state:null})

    }
  }

  const handleclickstate = (e,Gname)=>{
    if(e){
          
          // console.log(groupCard.current.childNodes)
          groupCard.current.childNodes.forEach((element,i) => {
          // console.log(element.childNodes)

          if(element.childNodes[1].innerText === Gname){

            groupCard.current.childNodes[i].style.backgroundColor='rgba(0, 0, 0, 0.1)'


          }else{
            groupCard.current.childNodes[i].style.backgroundColor='rgba(0, 0, 0, 0)'
          }
          
        });



    }

}

 

  useEffect(()=>{

    if(localStorage.getItem('groups'))
    {
      // console.log(JSON.parse(localStorage.getItem('groups')))
      setgroupsdata(JSON.parse(localStorage.getItem('groups')))
    }
    
    // setgroupsdata(localStorage.getItem('groups'))

    // console.log(groupsdata)

  },[isupdated])


  return (
    <div className={style.sidebar}>

    <div className={style.logo}>
        <h2>Pocket Notes</h2>
    </div>

    <div ref={groupCard} className={style.groupList}>
        
        {
          groupsdata.map((group,i)=>( <GroupCard data={group} handleGroupclick={handleGroupclick} handleclickstate={handleclickstate} key={i+'bcv'+2} /> ))
        }
    </div>

    <Button onclick={handleAdd} />

    

    </div>
  )
}

export default Sidebar