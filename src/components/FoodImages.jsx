export default function FoodImage(props){
    
   // eslint-disable-next-line react/prop-types
   const {imageStyle,imageContainer,image}= props

   
    
    return <>
     <div className={imageContainer}>
         <img src={image} className={imageStyle} />
      </div>
    
    </>
}