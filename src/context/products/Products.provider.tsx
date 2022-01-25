import React, { useState } from "react"
import { ProductsContext, ProductsContextType } from "./Products.context";

export const ProductsProvider = (props: {children?: any}) => {

    const [products, setProducts] = useState([]);

    const context: ProductsContextType = {
        products,
        setProducts
    }

    return (
        <ProductsContext.Provider value={context}>
            {props.children ? props.children : null}
        </ProductsContext.Provider>
    )

}