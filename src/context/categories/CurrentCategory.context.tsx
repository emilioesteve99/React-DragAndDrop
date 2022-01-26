import { createContext, useContext } from "react";
import { CategoryType } from "../../type/Category";

export const CurrentCategoryContext = createContext<CurrentCategoryContextType>({
    currentCategory: null,
    setCurrentCategory: null
});

export const useCurrentCategoryContext = () => useContext(CurrentCategoryContext);

export type CurrentCategoryContextType = {
    currentCategory: CategoryType;
    setCurrentCategory: Function;
}