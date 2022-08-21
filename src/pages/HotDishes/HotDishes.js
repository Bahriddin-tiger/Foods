import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Item } from "../../components/Item/Item"
import "./HotDishes.css"


export const HotDishes = () =>{
    const [hotDishes, setHotDishes] = useState("")
    const [bookmark,setBookmark ]=useState([]);
    useEffect(()=>{
        axios.get('https://food-service-layer-app.herokuapp.com/food/1')
        .then((res)=> setHotDishes(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<div>
    
        
        {
            hotDishes.length && (
                <ul className="hotDishes-list">
                {hotDishes.map((e)=><Item bookmark={bookmark} setBookmark={setBookmark}  obj={e} key={e.name} />)}
                </ul>
            )
        }
            </div>
    )
}