import React, { useEffect, useState, FC } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Pizza {
  id: string;
  imageUrl: string;
  title: string;
  types: [number];
  sizes: [number];
  price: number;
  category: number;
  rating: number;
}

const FullPizza: FC = () => {
  const { id } = useParams();

  const [pizza, setPizza] = useState<Pizza>();
  const typeNames = ["тонкое", "традиционное"];

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://626d16545267c14d5677d9c2.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (e) {
        alert("errrror");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...................</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <div className="full-pizza-block__selector">
        <ul>
          {pizza.types.map((typeId) => (
            <li>{typeNames[typeId]}</li>
          ))}
        </ul>
        <ul>
          {pizza.sizes.map((size, i) => (
            <li>{size} см.</li>
          ))}
        </ul>
      </div>

      <h2>{pizza.title}</h2>
      <h2>Цена: {pizza.price}</h2>
      <h2>Рейтинг: {pizza.rating}</h2>
    </div>
  );
};

export default FullPizza;
