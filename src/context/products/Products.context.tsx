import { useContext } from "react";
import { createContext } from "react";
import { ProductType } from "../../type/Product";

export const ProductsContext = createContext<ProductsContextType>({products: [], setProducts: null});

export const useProductsContext = () => useContext(ProductsContext);

export type ProductsContextType = {
    products: ProductType[];
    setProducts: Function;
}