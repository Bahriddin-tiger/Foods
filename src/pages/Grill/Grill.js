import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Item } from "../../components/Item/Item"
import "./Grill.css"


export const Grill = () =>{
    const [grill, setGrill] = useState("")
    const [bookmark,setBookmark ]=useState([]);
    useEffect(()=>{
        axios.get('https://food-service-layer-app.herokuapp.com/food/4')
        .then((res)=> setGrill(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<>
    
        
        {
            grill.length && (
                <ul className="grill-list">
                {grill.map((e)=><Item bookmark={bookmark} setBookmark={setBookmark}  obj={e} key={e.name} />)}
                </ul>
            )
        }
            </>
    )
}