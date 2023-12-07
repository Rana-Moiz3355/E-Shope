import React from 'react'

function Cart() {
  return (
    <div>
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <img
              src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Item 1"
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">Product 1</h2>
              <p className="text-gray-600">Price: $19.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cart
