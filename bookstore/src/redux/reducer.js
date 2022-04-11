import { BOOKSSHOW, CARTITEMS, SEARCHITEM, PRICE } from "./actionTypes";
const initState = {
  books: [],
  cartitems: [],
  inputs: [],
  price: "",
};
export const Reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case BOOKSSHOW:
      return { ...state, books: payload, inputs: payload };
    case CARTITEMS:
      return { ...state, cartitems: payload };
    case SEARCHITEM:
      return { ...state, inputs: payload };
    case PRICE:
      return { ...state, price: payload };
    default:
      return state;
  }
};
