import Hero from "./Components/Hero";
import Logos from "./Components/Logos";
import Nav from "./Components/Nav";
import PopularCars from "./Components/PopularCars";
import { CarApis } from "./utils/apis";



function App() {
  CarApis()
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
