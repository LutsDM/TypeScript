import { IProduct } from "../../components/products/types/types";

export interface IProductState {
    products: IProduct[],
    isLoading: boolean,
    error: string,
  }


  export interface ICartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  }
  export interface ICart {
  items: ICartItem[];
  isLoading: boolean,
  error: string,
  }