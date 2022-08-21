import "./Static.css"
export const Static =({img, foiz, icon,price,text})=>{
    return(<>
    
        
            <li className="static-item">
                <div className="static-box">
                    <img className="static-img" src={img} alt={text} />
                    <p className="static-foiz" >{foiz}</p>
                    <img className="static-icon" src={icon} alt={text}/>
                </div>
                <p className="static-price" >{price}</p>
                <p className="static-text">{text}</p>
            </li>
      
    </>
    )
}