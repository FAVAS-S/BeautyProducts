import { useState } from "react";
import Search from "./components/Search";
import BeautyList from "./components/BeautyList";
import Nav from "./components/Nav";
import "./app.module.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/foodDetails";
// import Container from "./components/Container";

function App() {
  const [beautyData, setBeautyData] = useState([]);
  const [beautyId,setBeautyId]= useState('')

  

  return (
    <>
      <Nav />
      <Search setBeautyData={setBeautyData} />

      <Container>
        <InnerContainer>
          <BeautyList setBeautyId={setBeautyId} beautyData={beautyData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails  beautyId={beautyId}   beautyData={beautyData}/>
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
