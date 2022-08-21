import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Item } from "../../components/Item/Item"
import "./Soup.css"


export const Soup = () =>{
    const [soup, setSoup] = useState("")
    const [bookmark,setBookmark ]=useState([]);
    useEffect(()=>{
        axios.get('https://food-service-layer-app.herokuapp.com/food/1')
        .then((res)=> setSoup(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<>
    
        
        {
            soup.length && (
                <ul className="soup-list">
                {soup.map((e)=><Item bookmark={bookmark} setBookmark={setBookmark}  obj={e} key={e.name} />)}
                </ul>
            )
        }
            </>
    )
}