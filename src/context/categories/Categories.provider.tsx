import { useEffect } from "react";
import { useState } from "react";
import { BffHttpService } from "../../services/BffHttp.service";
import { CategoriesContextType } from "./Categories.context";
import { CategoriesContext } from "./Categories.context";

const baseUrl = 'http://localhost:4100/api/pmi/'

export const CategoriesProvider = (props: {children: any}) => {

    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);

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
        currentCategory,
        setCurrentCategory
    }

    return (
        <>
            <CategoriesContext.Provider value={context}>
                {props.children}
            </CategoriesContext.Provider>
        </>
    )

}