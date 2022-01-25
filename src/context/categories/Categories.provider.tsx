import { useEffect } from "react";
import { useState } from "react";
import { CategoriesContextType } from "./Categories.context";
import { CategoriesContext } from "./Categories.context";

const baseUrl = 'http://localhost:4100/api/pmi/'

export const CategoriesProvider = (props: {children: any}) => {

    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await (await fetch(`${baseUrl}getCategories?verticalId=4`)).json();
            setCategories(response.data.categories);
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