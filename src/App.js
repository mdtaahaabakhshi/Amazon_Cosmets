import "./App.css";
import Footer from "./components/footer/Footer";
import Header  from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Product from "./components/product/Product";
import Slider from "./components/slider/Slider";
import Testimonials from "./components/testimonials/Testimonials";
import Virtual from "./components/virtual/Virtual";
function App() {
  return (
   <div>
<Header/>
<Hero/>
<Slider/>
<Virtual/>
<Product/>
<Testimonials/>
<Footer/>
   </div>
  );
}

export default App;
