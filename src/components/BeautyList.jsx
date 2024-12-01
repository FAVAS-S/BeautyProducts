import FoodItem from "./FoodItem";
import PropType from "prop-types";

FoodList.propTypes = {
  beautyData: PropType.array,
  setBeautyId:PropType.any,
};

export default function FoodList({setBeautyId, beautyData }) {
 
  
  
  return (
    <>
      {beautyData.map((item) => (
        
          <FoodItem  setBeautyId={setBeautyId} key={item.id}  item={item} />
        
      ))}
    </>
  );
}
