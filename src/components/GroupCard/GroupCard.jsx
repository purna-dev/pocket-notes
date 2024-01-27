import React,{useState} from 'react'
import style from './GroupCard.module.css'

function GroupCard({data,handleGroupclick,handleclickstate}) {
    // console.log(handleGroupclick)
    
    // console.log(data.groupName)
    let newAr = data.groupName.split(' ')
    
   



  return (
    <div  className={style.group} onClick={(e)=>{
        handleGroupclick(data)
        handleclickstate(e,data.groupName)
        // handlenoteupdate(data.groupName)
        }
        }>

    <div style={{width:'56px',height:'56px',backgroundColor:`${data.Color}`,color:'white',borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'1.2rem',
        fontWeight:'500',
        letterSpacing:'0.03rem'
    
    }}>

    {newAr[1]?newAr[0].charAt(0).toUpperCase()+newAr[1].charAt(0).toUpperCase():newAr[0].charAt(0).toUpperCase()}
        
    </div>
    <div>
        <p style={{fontSize:'1.2rem',fontWeight:'600'}}>
        {data.groupName}
        
        
        </p>
    </div>
    

    </div>
  )
}

export default GroupCard