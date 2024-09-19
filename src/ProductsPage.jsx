import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import axios from "axios";
import { useState, useEffect } from "react"

// let products = [
//   {
//     name: "thing1",
//     description: "this and that",
//     price: 21,
//     image_url: "image1.jpeg"
//   },
//   {
//     name: "thing2",
//     description: "does stuff",
//     price: 42,
//     image_url: "image2.jpeg"
//   },
//   {
//     name: "thing3",
//     description: "so much help",
//     price: 55,
//     image_url: "image3.jpeg"
//   },
// ];


export function ProductsPage() {
  const [products, setProducts] = useState([]);
  
  const handleIndex = () => {
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data);
      console.log(response.data[0]);
      setProducts(response.data);
    })
  }
  
  useEffect(handleIndex, []);
  return (
    <main>
      <ProductsNew />
      <ProductsIndex products={products}/>
      {/* <button type="submit" onClick={handleIndex}>Get Data</button> */}
    </main>
  );
}
