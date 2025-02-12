import { IProduct } from "../../components/products/types/types";

export interface IProductState {
    products: IProduct[],
    isLoading: boolean,
    error: string,
  }

  export interface ICartData {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  } 