import { BOOKSSHOW, CARTITEMS, SEARCHITEM, PRICE } from "./actionTypes";
export const booksShow = (data) => ({
  type: BOOKSSHOW,
  payload: data,
});
export const cartItems = (data) => ({
  type: CARTITEMS,
  payload: data,
});

export const searchItem = (data) => ({
  type: SEARCHITEM,
  payload: data,
});

export const price = (data) => ({
  type: PRICE,
  payload: data,
});
