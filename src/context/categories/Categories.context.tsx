import { useContext } from "react";
import { createContext } from "react";
import { CategoryType } from "../../type/Category";

export const CategoriesContext = createContext<CategoriesContextType>(null as any);

export const useCategoriesContext = () => useContext(CategoriesContext);

export type CategoriesContextType = {
    categories: CategoryType[];
    currentCategory: CategoryType;
    setCategories: Function;
    setCurrentCategory: Function;
}