import Hero from "./Components/Hero";
import Logos from "./Components/Logos";
import Nav from "./Components/Nav";
import PopularCars from "./Components/PopularCars";
import { Calculation, CarApis } from "./utils/apis";



function App() {
  const result=CarApis("Porsche",2024);
  
  return (
<>
<Nav/>
<Hero/>
<Logos/>
<PopularCars/>
</>
  );
}

export default App;
