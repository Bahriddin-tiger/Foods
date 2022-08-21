
import "./Item.css"

export const Item =({obj, bookmark, setBookmark}) =>{
    const handleItem =()=>{
        const find = bookmark.findIndex((element)=>element.id ===obj.id);
        if(find>=0){
            bookmark[find].count +=1;
            bookmark[find].newPrice += bookmark[find].price;
        }else{
            setBookmark(...bookmark,{...Item,count:1,newPrice:obj.price})
        }
        setBookmark([...bookmark])
    }
    return(
    <li className=" elItem" onClick={handleItem}>
      <img className="item-img" width={150} height={150} src={`https://food-service-layer-app.herokuapp.com/${obj.image}`} alt={obj.name} />
      <h3 className="item-title" > {obj.name}</h3>
      <p className="item-price">${obj.price}</p>
      <p className="item-bowls">{obj.bowls} Bowls avelebel</p>
    </li>
    )
}