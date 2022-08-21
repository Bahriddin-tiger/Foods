import "./Settings.css"
import {NavLink , Outlet} from "react-router-dom"
import live from "../../assets/images/love.svg"
import Resturan from "../../assets/images/reostaran.svg"
import Product from "../../assets/images/Product.svg"
import Notifications from "../../assets/images/Notifications.svg"
import Security from "../../assets/images/Security.svg"
import About from "../../assets/images/About.svg"
export const  Settings = () =>{
    return(
        <>
        <div className="settings-box">
            <h2 className="settings-title"> Settings</h2>
            <div className="settings-div">
                <div className="setting-pages">
                <ul className="settings-list">
                    <li className="settings-item">
                        <NavLink to="Appereance" className="settings-link">
                            <img className="settings-img" src={live} alt="live" />
                            <div className="settings-title-box">
                                <h3 className="settings-page-title">
                                Appereance
                                </h3>
                                <p className="settings-pages-text">
                                Dark and Light mode, Font size
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li className="settings-item">    
                        <NavLink to="Restaurant" className="settings-link">
                            <img className="settings-img" src={Resturan} alt="resturan" />
                            <div className="settings-title-box">
                                <h3 className="settings-page-title">
                                Your Restaurant
                                </h3>
                                <p className="settings-pages-text">
                                Dark and Light mode, Font size
                                </p>
                            </div>
                        </NavLink>
                        </li>
                    <li className="settings-item">    
                        <NavLink to="" className="settings-link">
                            <img className="settings-img" src={Product} alt="Product" />
                            <div className="settings-title-box">
                                <h3 className="settings-page-title">
                                Products Management
                                </h3>
                                <p className="settings-pages-text">
                                Manage your product, pricing, etc
                                </p>
                            </div>
                        </NavLink>
                        </li>
                    <li className="settings-item">    
                        <NavLink to="Notifications" className="settings-link">
                            <img className="settings-img" src={Notifications} alt="Notifications" />
                            <div className="settings-title-box">
                                <h3 className="settings-page-title">
                                Notifications
                                </h3>
                                <p className="settings-pages-text">
                                Customize your notifications
                                </p>
                            </div>
                        </NavLink>
                        </li>
                    <li className="settings-item">    
                        <NavLink to="Security" className="settings-link">
                            <img className="settings-img" src={Security} alt="Security" />
                            <div className="settings-title-box">
                                <h3 className="settings-page-title">
                                Security Appereance
                                </h3>
                                <p className="settings-pages-text">
                                Configure Password, PIN, etc
                                </p>
                            </div>
                        </NavLink>

                        </li>
                   
                    <li  className="settings-item">   
                        <NavLink to="About" className="settings-link">
                            <img className="settings-img" src={About} alt="About Us" />
                            <div className="settings-title-box">
                                <h3 className="settings-page-title">
                                About Us
                                </h3>
                                <p className="settings-pages-text">
                                Find out more about Posly
                                </p>
                            </div>
                        </NavLink>
                    </li>
                </ul>
                </div>
                   \<Outlet/>
            </div>

        </div>
        </>
    )
}