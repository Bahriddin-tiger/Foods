import { useEffect } from "react";
import "./Select.css"

export const Select =({select,setSelect}) =>{
   
    useEffect(() => {
		if (select.length ) {
			fetch(`https://food-service-layer-app.herokuapp.com/food/5/${select}`)
				.then((res) => res.json())
				.then((name) => setSelect(name))
				.catch((er) => console.log(er));
		} else {
			fetch(`https://food-service-layer-app.herokuapp.com/food/5`)
				.then((res) => res.json())
				.then((region) => setSelect(region))
				.catch((er) => console.log(er));
		}
	}, [select]);
    return(

<select className="select" onChange = {(evt) => {setSelect(evt.target.value)}}>
<option defaultValue = 'Dine In' > Dine In </option> 
<option defaultValue = 'To Go' > To Go </option>
<option defaultValue = 'Delivery' > Delivery </option> 

 </select>
    )
}
