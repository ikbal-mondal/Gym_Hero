import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Carts from "../../Cart/Carts";
import "./LoadData";
import "./LoadData.css";

const LoadData = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const brack = JSON.parse(localStorage.getItem("breakTime"));
    setBreakTime(brack);
  }, []);

  const handleAddToCart = (data) => {
    const newCart = [...cart, data];
    setCart(newCart);
  };

  const getBerkTime = (d) => {
    d = parseInt(d);
    setBreakTime(d);

    localStorage.setItem("breakTime", d);
  };

  return (
    <div className="all-cartWrap grid  grid-cols-1 lg:grid-cols-4  mx-auto">
      <div className="cart-container w-11/12  grid  col-span-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-12  bg-white-100">
        {data.map((data) => (
          <DisplayData
            key={data.id}
            data={data}
            handleAddToCart={handleAddToCart}
          ></DisplayData>
        ))}
      </div>

      <div className=" ">
        <Carts cart={cart} getData={getBerkTime} breckTime={breakTime}></Carts>
      </div>
    </div>
  );
};

const DisplayData = ({ data, handleAddToCart }) => {
  const { img, name, Time, Age, description } = data;

  return (
    <div className="shadow-2xl rounded-xl">
      <figure>
        <img className="rounded-xl" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">Name:{name}</h2>
        <p>{description}</p>
        <p>Time required : {Time}</p>
        <p>For Age : {Age}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(data)}
            className="btn btn-primary w-full"
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoadData;
