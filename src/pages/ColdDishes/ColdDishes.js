import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Item } from "../../components/Item/Item"
import "./ColdDishes.css"


export const ColdDishes = () =>{
    const [coldDishes, setColdDishes] = useState("")
    const [bookmark,setBookmark ]=useState([]);
    useEffect(()=>{
        axios.get('https://food-service-layer-app.herokuapp.com/food/2')
        .then((res)=> setColdDishes(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<>
    
        
        {
            coldDishes.length && (
                <ul className="coldDishes-list">
                {coldDishes.map((e)=><Item bookmark={bookmark} setBookmark={setBookmark}  obj={e} key={e.name} />)}
                </ul>
            )
        }
            </>
    )
}

