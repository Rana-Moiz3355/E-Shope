import React, { useContext } from "react";
import userContext from "../../Context/userContext";

function Cart() {
  const context = useContext(userContext);
  return (
    <>
      <div>
        <h1 className="text-2xl text-center font-semibold mb-4">
          Shopping Cart{" "}
        </h1>
        {context?.data.cart.map((item) => {
          return (
            <div key={item.id}>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white p-4 rounded-md shadow-md mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt="Item 1"
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div>
                        <h2 className="text-lg font-semibold"> {item.title}</h2>
                        <p className="text-gray-600">Price:${item.price} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
