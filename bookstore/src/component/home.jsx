import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { booksShow, cartItems, searchItem } from "../redux/actions";
import { Link } from "react-router-dom";
import { Cart } from "./cart";

export const Books = () => {
  const data = useSelector((store) => store.books);
  const m = useSelector((store) => store.cartitems);
  const s = useSelector((store) => store.inputs);
  const [search, setSearch] = useState([]);
  //   console.log(s, "ss");
  const [cartitem, setCartitem] = useState([]);
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        dispatch(booksShow(res.data));
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, []);
  const addtocart = (item) => {
    if (item.status == false) {
      setCartitem([...cartitem, item]);
      item.status = true;
    } else if (item.status) {
      alert("You have already added the book");
    }
  };
  useEffect(() => {
    dispatch(cartItems(cartitem));
  });

  const filterinput = (e) => {
    setName(e.target.value);
    data.map((item) => {
      if (item.name === e.target.value) {
        dispatch(searchItem([item]));
      }
    });
  };
  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={name}
        onChange={(e) => filterinput(e)}
      />
      <Link to="/cart">Cart</Link>
      <div className="container">
        {data.map((item) => {
          return (
            <>
              <div key={item._id}>
                <h3>{item.name}</h3>
                <p>{item._id}</p>
                <img
                  src={item.image}
                  style={{ width: "200px", height: "200px" }}
                />
                <p>{item.author}</p>
                <p>{item.price}</p>
                <button
                  onClick={() => {
                    if (item._id) {
                      addtocart(item);
                    }
                  }}
                >
                  add to cart
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
