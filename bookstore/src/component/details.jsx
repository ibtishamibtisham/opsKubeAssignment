import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Details = () => {
  const d = useSelector((store) => store.price);
  const [data, setData] = useState({ number: "", address: "" });
  const mydata = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
  return (
    <>
      <h1 style={{ color: "red " }}>Money to be paid:{d}</h1>
      <br />
      <input
        name="number"
        placeholder="enter the number"
        value={data.number}
        onChange={mydata}
        type="number"
      />
      <input
        name="address"
        type="text"
        placeholder="enter adress"
        value={data.address}
        onChange={mydata}
      />
      <br />
      <button
        onClick={() => {
          alert("Order has been placed successfully");
        }}
      >
        <Link to="/"> Place order</Link>
      </button>
    </>
  );
};
