import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { callApi } from "../utils/CallApi";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setproduct] = useState(null);

  const getProduct = () => {
    callApi(`data/products.json`).then((productResults) => {
      setproduct(productResults[id]);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1>Loading Product...</h1>;

  return product && <div>ProductPage {product.title}</div>;
}
