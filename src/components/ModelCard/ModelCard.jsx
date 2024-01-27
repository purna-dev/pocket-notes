import {useRef,useState,useEffect,useCallback} from 'react'
import style from './ModelCard.module.css'


function ModelCard({handlemodel,updatedlocaldata}) {


    let default_color = [
        '#B38BFA','#FF79F2','#43E6FC','#F19576','#0047FF','#6691FF'
    ]
    // let [groups,setgroups] = useState([])
    let [groupDetails,setgroupDetails] = useState({
        groupName:'',
        Color:''
    })

    const [localdata,setlocaldata] = useState(null)
    const [updater,setupdater] = useState(false);
    const [errChecker,seterrChecker] = useState(false)

    let [Gname,setGname] = useState('');

    let [isSelected,setisSelected] = useState(false)
    let divRef = useRef(0)
    let iscolor = false;
        let isValid = true;


    const handleColor = (e,color,i)=>{
        // console.log(color)
        setisSelected(!isSelected)
        

        if(e){
        // console.log(divRef.current.childNodes[i])
        divRef.current.childNodes.forEach(element => {
            element.style.border = '2px solid rgba(0, 0, 0, 0)'
            
        });
        setgroupDetails({...groupDetails,Color:default_color[i]})
        
        divRef.current.childNodes[i].style.border='2px solid rgba(0, 0, 0, 0.7)'
        // divRef.current.style.border='2px solid rgba(0, 0, 0, 0.7)'
        iscolor=true
        }
        
        
    }
    const handleChange = (e)=>{
            let name = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            
            // let groupLogo = name.split(' ');
            // console.log(groupLogo[0].slice(0,1) + groupLogo[1].slice(0,1));
            
            
        setgroupDetails({...groupDetails,groupName:name.trim()})

            
            setGname(name)
    }

    // console.log(Gname)


    const handleCreate = (e)=>{

        // setgroupDetails({...groupDetails,groupName:Gname})
        
        if(e){
        getlocalData()  

            

            // if(localStorage.getItem('groups').length){

            //     localStorage.getItem('groups').forEach((e,i)=>{
            //         if(e.groupName === groupDetails.groupName){
    
            //         setupdater(true)
    
            //     isValid = false
    
            //         }
            //     })

            // }

         
        // if(groupDetails.groupName === localdata.groupName){
        //     setupdater(true)
        //     isValid = false
        //     console.log(updater)
        // }

        localdata.forEach((data,i)=>{
            if(data.groupName === groupDetails.groupName){
                
                seterrChecker(true)
                
            isValid = false
            // console.log(updater)
            }
        })
        if(groupDetails.groupName === ''){
            isValid = false
            alert('Enter Group Name !')
        }
        if(groupDetails.Color === ''){
            isValid = false
            alert('Choose group color !')
        }
        

        if(isValid){
            // setgroups([...groups,groupDetails])

            
            
        

            setupdater(!updater)
            seterrChecker(!errChecker)
            
            let newad =  JSON.parse(localStorage.getItem('groups'))
            localStorage.setItem('groups',JSON.stringify([...newad,groupDetails]))
            // handlemodel(false)
            updatedlocaldata(groupDetails.groupName)

            alert('Group Created Successfully !') 
            handlemodel(false)           


        }
        // if(isStore){

        //     localStorage.setItem('groups',JSON.stringify(groups))
        //     setupdater(false)

        // }

        }
        

    }

    const getlocalData = ()=>{
        let data =localStorage.getItem('groups')
        if(data){
            // console.log(JSON.parse(data))
            setlocaldata(JSON.parse(data))
        }
        else{
        localStorage.setItem('groups',JSON.stringify([]))

        }

    }

    useEffect(()=>{
        setupdater(false)
        seterrChecker(false)
        getlocalData()

        // console.log(groupDetails.groupName)
        // console.log(updatedlocaldata)

    },[updater])



  return (
    <>
    <div className={style.wrapper} onClick={()=>handlemodel(false)}>
    </div>
    <div className={style.model}>
        <h2>Create New group</h2>
        <div>
            <label>Group Name</label>
            <input type='text' value={Gname} onChange={handleChange} placeholder='Enter group name'/>
        </div>
        
        {errChecker?<span style={{fontSize:'0.8rem',color:'red',marginLeft:'8rem'}}>Group name already exits !</span>:<></>}
        <div>
            <p>Choose colour</p>
            <div ref={divRef} style={{display:'flex',gap:'0.6rem'}}>
            {
                default_color.map((color,i)=>(<div  onClick={(e)=>handleColor(e,color,i)} key={i+'abc '+1}  className={style.color_select} style={{backgroundColor:`${color}`,borderRadius:'50%'}} ></div> ))
            }
            </div>
        </div>

        <button onClick={handleCreate}>Create</button>

    </div>
    </>
  )
}

export default ModelCard