import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Item } from "../../components/Item/Item"
import "./Desert.css"


export const Desert = () =>{
    const [desert, setDesert] = useState("")
    const [bookmark,setBookmark ]=useState([]);
    useEffect(()=>{
        axios.get('https://food-service-layer-app.herokuapp.com/food/6')
        .then((res)=> setDesert(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<>
    
        
        {
            desert.length && (
                <ul className="desert-list">
                {desert.map((e)=><Item bookmark={bookmark} setBookmark={setBookmark}  obj={e} key={e.name} />)}
                </ul>
            )
        }
            </>
    )
}