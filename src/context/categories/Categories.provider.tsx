import { useEffect } from "react";
import { useState } from "react";
import { BffHttpService } from "../../services/BffHttp.service";
import { CategoriesContextType } from "./Categories.context";
import { CategoriesContext } from "./Categories.context";

export const CategoriesProvider = (props: { children: any }) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await BffHttpService.getVerticalCategories(4);
            setCategories(categories);
        }
        fetchCategories();
    }, []);

    const context: CategoriesContextType = {
        categories,
        setCategories,
    }

    return (
        <CategoriesContext.Provider value={context}>
            {props.children}
        </CategoriesContext.Provider>
    )

}