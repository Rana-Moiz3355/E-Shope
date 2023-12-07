import React, { useReducer } from "react";
import userContext from "./userContext";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";




const initialState = {
  cart: [],

};

const reducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      console.log(state.cart);
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity + 1;
        
      }
      else {
        state.cart.push(action.payload);
      }
      
     
      return state;
      break;
  }
};




function UserContextProvider({ children }) {
  const [data, dispatch] = useReducer(reducer, initialState);
 
  return (
    <userContext.Provider value={{ data, dispatch }}>
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
