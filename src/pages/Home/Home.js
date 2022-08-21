import { useState } from "react";
import {NavLink,Outlet} from "react-router-dom"
import { Header } from "../../components/Header";
import { Select } from "../../components/Select/Select"
import "./Home.css"
export const  Home = () =>{
    const [select, setSelect] = useState([]);
    
    return(
        <>
      

       <div className="home-flex">
         <Header/>
         <input className="home-input" type="search" placeholder="Search for food, coffe, etc.." />
       </div>
        <div className="home-box">
                <NavLink className="home-link" to="">
                    Hot Dishes
                </NavLink>
                <NavLink className="home-link"  to="cold">
                    Cold 
                </NavLink>
                <NavLink className="home-link"  to="soup">
                    Sub 
                </NavLink>
                <NavLink className="home-link"  to="grill">
                    Grill 
                </NavLink>
                <NavLink className="home-link"  to="appetizer">
                    Appetizer
                </NavLink>
                <NavLink className="home-link"  to="desert">
                    Desert
                </NavLink>
        </div>
        <div className="appetizer-select">
        <h2 className="appetizer-hidden">
        Choose Dishes
        </h2>
<Select  select={select}  setSelect={setSelect} />
    </div>
        <div>
            <Outlet/>
        </div>
      
        </>
    )
}