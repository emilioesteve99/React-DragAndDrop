import { ProductType } from "../type/Product";

export const ProductCard = ({product}: PropsType) => {
    return (
        <div>
            <h2>{product.name}</h2>
        </div>
    )
}

type PropsType = {
    product: ProductType;
}