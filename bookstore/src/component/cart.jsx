import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { price } from "../redux/actions";

export const Cart = () => {
  const cartitems = useSelector((store) => store.cartitems);
  const dispatch = useDispatch();
  let [total, setTotal] = useState(0);

  const totalmoney = () => {
    cartitems.map((item) => {
      total = total + item.price;
    });
    setTotal(total);
    dispatch(price(total));
  };
  useEffect(() => {
    totalmoney();
  }, []);
  return (
    <>
      <div className="container">
        {cartitems.map((item) => {
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
              </div>
            </>
          );
        })}
      </div>
      <button>
        <Link to="/details">Order</Link>
      </button>
    </>
  );
};
