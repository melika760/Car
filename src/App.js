import AboutUs from "./Components/AboutUs";
import Hero from "./Components/Hero";
import Logos from "./Components/Logos";
import Nav from "./Components/Nav";
import PopularCars from "./Components/PopularCars";
import { CarApis } from "./utils/apis";



function App() {
  const {oneItem}=CarApis("Porsche",2024);
  
  console.log(oneItem)
  return (
<>
<Nav/>
<Hero/>
<Logos/>
<AboutUs/>
<PopularCars/>

</>
  );
}

export default App;
