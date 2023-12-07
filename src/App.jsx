import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import UserContextProvider from "./Context/userContextProvider";
import Cart from "./Components/CartPage/Cart";
import Form from "./Components/Form/Form";
import NavBar from "./Components/Header/NavBar";
import Product from "./Components/Product.jsx/Product";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <UserContextProvider>
   
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </BrowserRouter>
          </QueryClientProvider>
        
      </UserContextProvider>
    </>
  );
}

export default App;
