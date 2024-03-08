import React from "react";
import { useParams } from "react-router";

export default function ProductPage() {
  const { id } = useParams();
  return <div>ProductPage {id}</div>;
}
