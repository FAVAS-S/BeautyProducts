import PropTypes from "prop-types";
import style from './FoodDetails.module.css'

FoodDetails.propTypes = {
  beautyId: PropTypes.number,
  beautyData: PropTypes.array,
};

export default function FoodDetails({ beautyId, beautyData }) {
 
  let arr;

  arr = beautyData.filter((prev) => prev.id === beautyId);

  return (
   <div className={style.main}>
           <div className={style.container}>
            <h1>Food Details</h1> 
             {arr.map((item) => (
               <>
                 <h4>{item.category} </h4>
                 <div className={style.image}><img className={style.img} src={item.images[0]} alt="" /></div>
                 <div  className={style.priceContainer}>
                     <h5> Price {item.price}$ </h5>
                 </div>
                 <h3>{item.description}</h3>
                 <h3>Discount {item.discountPercentage}%</h3>
                 <p>Minimum Order Quantity : {item.minimumOrderQuantity}</p>
                 <h6>Return Policy : {item.returnPolicy                 }</h6>
                 <h2>Stock : {item.stock}</h2>
               </>
             ))}
           </div>
   </div>
  );
}
