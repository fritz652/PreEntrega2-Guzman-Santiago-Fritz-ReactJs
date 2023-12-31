import "./ListCardProducts.css";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

import axios from "axios";

const ListCardProducts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setItems(res.data);
    });
  }, []);

  return (
    <div className="Cards-List">
      {items?.map((item) => (
        <div key={item.id}>
          <Link to={`/detail/${item.id}`}>
            <Card data={item} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListCardProducts;
