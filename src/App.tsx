import { ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Logo from "../public/logo.webp";
import About from "./pages/about/About";
import Product from "./pages/product/Product";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer";
import KNamProducts from "./pages/product/sections/KNamProducts";
import KEggProducts from "./pages/product/sections/KEggProducts";
import KTeaProducts from "./pages/product/sections/KTeaProducts";
import ChefMateProducts from "./pages/product/sections/ChefMateProducts";

function App(): ReactElement {
  return (
    <Router>
      <Navbar navLinks={["Home", "About", "Products"]} logo={Logo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />}>
          <Route index element={<KTeaProducts />} />
          <Route path="k-egg" element={<KEggProducts />} />
          <Route path="k-nam" element={<KNamProducts />} />
          <Route path="chefmate" element={<ChefMateProducts />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
