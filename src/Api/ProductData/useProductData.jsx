import { useQuery } from "react-query";
import axios from "axios";
const BaseUrl = "https://fakestoreapi.com";

const fetchData = () => {
  return axios.get(`${BaseUrl}/products`);
};

export default function useProductData() {
  return useQuery("product", fetchData);
}
