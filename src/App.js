import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Product from "./components/product/Product";
import Slider from "./components/slider/Slider";
import Testimonials from "./components/testimonials/Testimonials";
import Virtual from "./components/virtual/Virtual";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Brand from "./components/pages/brand";
import Collections from "./components/pages/collections";
import NewItem from "./components/pages/newItem";
import { Sales } from "./components/pages/sales";
import NotFound from "./components/pages/notFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Slider />
                <Virtual />
                <Product />
                <Testimonials />
                <Footer />
              </>
            }
          />
          <Route path="/brand" element={<Brand />} />
          <Route path="/newItem" element={<NewItem />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
