import { ProductsContext } from "../context/products/Products.context"
import { ProductCard } from "./ProductCard";

export const ProductsGrid = (props: {children?: any}) => {

    return (
        <ProductsContext.Consumer> 
            {(value) => {
                if(value?.products) {
                    return (
                        value.products?.map(product => {
                            return (
                                <ProductCard key={product.id} product={product}/>
                            )
                        })
                    )
                }
            }}
        </ProductsContext.Consumer>
    )

}