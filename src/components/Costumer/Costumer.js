import "./Costumer.css"
export const Costumer =({img,name,text,price,btn}) =>{
    return(
        <li className="costumer-item">
            <img  className="costumer-img" src={img} alt={name} />
            <h4 className="costumer-name">{name}</h4>
            <p className="costumer-text">{text}</p>
            <p className="costumer-price">{price}</p>
            <button className="costumer-btn">{btn}</button>
        </li>
    )
}