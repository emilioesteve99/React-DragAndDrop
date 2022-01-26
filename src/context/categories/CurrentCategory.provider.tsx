import { useState } from "react"
import { CurrentCategoryContext, CurrentCategoryContextType } from "./CurrentCategory.context";

export const CurrentCategoryProvider = (props: {children?: any}) => {

    const [currentCategory, setCurrentCategory] = useState(null);

    const context: CurrentCategoryContextType = {
        currentCategory,
        setCurrentCategory
    }

    return (
        <CurrentCategoryContext.Provider value={context}>
            {props.children}
        </CurrentCategoryContext.Provider>
    )

}