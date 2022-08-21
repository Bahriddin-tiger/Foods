import { Header } from "../../components/Header"
import Dollor from "../../assets/images/Dollor.png"
import Down from "../../assets/images/dovn.png"
import kontact from "../../assets/images/kontakt.png"
import Down1 from "../../assets/images/Frame 68.png"
import Path from "../../assets/images/Chiqish.png"
import father from "../../assets/images/father.svg"
import boy from "../../assets/images/boy.svg"
import ankil from "../../assets/images/ankil.svg"
import giyol from "../../assets/images/giyol.svg"
import mon from "../../assets/images/mon.svg"
import Chuchvara from "../../assets/images/item1.png"
import Lagman from "../../assets/images/item2.png"
import norin from "../../assets/images/item4.png"
import red from "../../assets/images/red.svg"
import blou from "../../assets/images/blou.svg"
import white from "../../assets/images/white.svg"
import { ApexChart, Costumer, Static } from "../../components"
import "./Dashboard.css"

export const  Dashboard = () =>{
  
   
  
    return(
        <>
      
        <div  className="dashboard-flex ">
        <div className="s" >
         <div className="dashboard-box">
          <Header/>
         </div>
          <ul className="static-list">
          <Static img={Dollor} foiz={"+32.40%"} icon={Down} price={"$10,243.00"}  text={"Total Revenue"}></Static>
          <Static img={Path} foiz={"-12.40% "} icon={Down1} price={"23,456"}  text={"Total Dish Ordered"}></Static>
          <Static img={kontact} foiz={"1,234"} icon={Down} price={"1,234"}  text={"Total Customer"}></Static>

          </ul>
          <div className="order">
      <div className="order-header">
      <h3 className="order-title">
      Order Report
      </h3>
      <button className="order-button">
      <svg className="svg" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.1976 10.2271C15.927 10.2271 17.3329 11.6148 17.3329 13.3219C17.3329 15.028 15.927 16.4167 14.1976 16.4167C12.4683 16.4167 11.0624 15.028 11.0624 13.3219C11.0624 11.6148 12.4683 10.2271 14.1976 10.2271ZM14.1976 11.6787C13.279 11.6787 12.533 12.4151 12.533 13.3219C12.533 14.2277 13.279 14.9651 14.1976 14.9651C15.1162 14.9651 15.8623 14.2277 15.8623 13.3219C15.8623 12.4151 15.1162 11.6787 14.1976 11.6787ZM7.4308 12.5958C7.83667 12.5958 8.16608 12.921 8.16608 13.3216C8.16608 13.7223 7.83667 14.0474 7.4308 14.0474H1.40247C0.996596 14.0474 0.66719 13.7223 0.66719 13.3216C0.66719 12.921 0.996596 12.5958 1.40247 12.5958H7.4308ZM3.80174 0.583374C5.53112 0.583374 6.93698 1.97207 6.93698 3.67818C6.93698 5.38429 5.53112 6.77298 3.80174 6.77298C2.07334 6.77298 0.666504 5.38429 0.666504 3.67818C0.666504 1.97207 2.07334 0.583374 3.80174 0.583374ZM3.80174 2.03497C2.88411 2.03497 2.13707 2.77238 2.13707 3.67818C2.13707 4.58397 2.88411 5.32138 3.80174 5.32138C4.72035 5.32138 5.46642 4.58397 5.46642 3.67818C5.46642 2.77238 4.72035 2.03497 3.80174 2.03497ZM16.5979 2.95257C17.0038 2.95257 17.3332 3.27773 17.3332 3.67837C17.3332 4.07901 17.0038 4.40417 16.5979 4.40417H10.5686C10.1627 4.40417 9.8333 4.07901 9.8333 3.67837C9.8333 3.27773 10.1627 2.95257 10.5686 2.95257H16.5979Z" fill="white"/>
    </svg>
    Filter Order</button></div>
    <ul className="order-list">
      <li className="order-item">
      Customer
      </li>
      <li className="order-item">
      Menu
      </li>
      <li className="order-item">
      Total Payment
      </li>
      <li className="order-item">
      Status
      </li>
    </ul>
        <ul className="costumer">
          <Costumer img={father}  name ={'Eren Jaegar'} text={'Spicy seasoned seafood noodles'} price={'$125'} btn={'Completed' } />
          <Costumer img={boy}  name ={'Reiner Braunn'} text={'Salted Pasta with mushroom sauce'} price={'$145'} btn={'Preparing' } />
          <Costumer img={ankil}  name ={'Levi Ackerman'} text={'BHot spicy fried rice with omelet'} price={'$105'} btn={'Pending' } />
          <Costumer img={giyol}  name ={'Historia Reiss'} text={'Hot spicy fried rice with omelet'} price={'$45'} btn={'Completed' } />
          <Costumer img={mon}  name ={'Hanji Zoe'} text={'Hot spicy fried rice with omelet'} price={'$245'} btn={'Completed' } />
          
        </ul>
      </div>
      </div>
      <div className="right-box">
        <div className="right-top">
      <div className="right-top-header">
        <h3 className="top-title">
        Most Ordered  
        </h3>
        <select className="top-select">
          <option value="Today">Today</option>
          <option value="All">All</option>
          <option value="Month">Month</option>
        </select>
      </div>
      <ul className="top-list">
        <li className="top-item">
            <img className="top-imgs" src={Chuchvara} alt="chuchvara" />
            <div className="item-div">
              <h4 className="item-name">
              Spicy seasoned seafood noodles
              </h4>
              <p className="item-text">
              200 dishes ordered
              </p>
            </div>
        </li>
        <li className="top-item">
            <img className="top-imgs" src={Lagman} alt="lagman" />
            <div className="item-div">
              <h4 className="item-name">
              Salted pasta with mushroom sauce
              </h4>
              <p className="item-text">
              120 dishes ordered
              </p>
            </div>
        </li>
        <li className="top-item">
            <img className="top-imgs" src={norin} alt="norin" />
            <div className="item-div">
              <h4 className="item-name">
              Beef dumpling in hot and sour soup
              </h4>
              <p className="item-text">
              80 dishes ordered
              </p>
            </div>
        </li>
      </ul>
      <button className="top-btn">
      View All
      </button>
        </div>
        <div className="right-top">
        <div className="right-top-header">
        <h3 className="top-title">
        Most Type of Order 
        </h3>
        <select className="top-select">
          <option value="Today">Today</option>
          <option value="All">All</option>
          <option value="Month">Month</option>
        </select>
      </div>
      <div className="bottom-box">
        <ApexChart />
        <div className="top-list">
        <div className="top-item">
          <img className="bottom-icon" src={blou} alt="bluo" />
          <div className="item-div">
            <h5 className="item-name" >
            Dine In
            </h5>
            <p className="item-text">
            200 customers
            </p>
          </div>
          
        </div>
        <div className="top-item">
          <img className="bottom-icon" src={red} alt="red" />
          <div className="item-div">
            <h5 className="item-name" >
            To Go
            </h5>
            <p className="item-text">
            120 customers
            </p>
          </div>
          
        </div>
        <div className="top-item">
          <img className="bottom-icon" src={white} alt="white" />
          <div className="item-div">
            <h5 className="item-name" >
            Delivery
            </h5>
            <p className="item-text">
            80 customers
            </p>
          </div>
          
        </div>
        </div>
      </div>
        </div>
      </div>
      </div>
     
         
        </>
    )
}