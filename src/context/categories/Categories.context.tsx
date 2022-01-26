import { useContext } from "react";
import { createContext } from "react";
import { CategoryType } from "../../type/Category";
import { CategoryCombinationActiveType } from "../../type/CategoryCombinationActive";

export const CategoriesContext = createContext<CategoriesContextType>(null as any);

export const useCategoriesContext = () => useContext(CategoriesContext);

export type CategoriesContextType = {
    categories: CategoryType[];
    setCategories: Function;
}