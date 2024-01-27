import {useState,useEffect} from 'react'
import style from './Home.module.css'
import Sidebar from '../Sidebar/Sidebar'
import artimg from '../../assets/home.png'
import lockimg from '../../assets/lock.png'
import ModelCard from '../ModelCard/ModelCard'

function Home() {

  let [isModel,setisModel] = useState(false);
  let [isupdated,setisupdated] = useState('');



  const handleModel = (model)=>{

    setisModel(model)

  }

  
  const updatedLocaldata = (isupdated) => {
    // console.log(isupdated)
    // console.log(isupdated)
    setisupdated(isupdated)
  }

  useEffect(()=>{
    
    // if(isModel){
    //   console.log('True Statement')
    //   setisModel(true)
    // }
  },[])

  return (
    <>
    <div className={style.home}>
    
    <Sidebar handlemodel={handleModel} isupdated={isupdated}/>

    <div className={style.desktop_v}>
    

    <img src={artimg} alt='pocket note image'/>
    <h2>Pocket Notes</h2>
    <p>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>


    <span> <img src={lockimg}/> end-to-end encrypted</span>
    </div>
    
    

    </div>
    {isModel?<ModelCard handlemodel={handleModel} updatedlocaldata={updatedLocaldata}  />:<></>}
    
    </>
  )
}

export default Home