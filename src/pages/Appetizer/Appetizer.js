import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Item } from "../../components/Item/Item"
import "./Appetizer.css"


export const Appetizer = () =>{
    const [appetizer, setAppetizer] = useState("")
    const [bookmark,setBookmark ]=useState([]);
    useEffect(()=>{
        axios.get('https://food-service-layer-app.herokuapp.com/food/5')
        .then((res)=> setAppetizer(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<>
    
        
        {
            appetizer.length && (
                <ul className="appetizer-list">
                {appetizer.map((e)=><Item bookmark={bookmark} setBookmark={setBookmark}  obj={e} key={e.name} />)}
                </ul>
            )
        }
            </>
    )
}