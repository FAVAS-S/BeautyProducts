import { useEffect, useState } from "react";
import PropTypes from "prop-types";
 
Search.propTypes={
  setBeautyData: PropTypes.any

}
export default function Search({setBeautyData}) {

 
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    async function foodApp() {
      const res =await fetch(`https://dummyjson.com/products`);

      const data =await res.json();

     await setBeautyData(data.products)
    }

    foodApp();
     
  }, [query,setBeautyData]);
  return (
    <div>
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="write something"
        />
      </div>
    </div>
  );
}


