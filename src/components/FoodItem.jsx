
import propType from "prop-types";
import FoodImage from "./FoodImages";
import style from "./FoodItem.module.css";

FoodItem.propTypes={
  item:propType.object,
  setBeautyId:propType.any
}

export default function FoodItem({item,setBeautyId}) {
      
  return (
    <div className={style.container}>
      <FoodImage
        image={item.images[0]}
        imageContainer={style.imageContainer}
        imageStyle={style.image}
      />
      <h1 className={style.text}>{item.title}</h1>
      <h1 className={style.title}>{item.brand}</h1>
      <button onClick={()=>{
       
       setBeautyId(item.id)
        
      }} className={style.button}>View Details</button>
    </div>
  );
}
