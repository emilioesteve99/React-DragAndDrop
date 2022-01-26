import { useProductsContext } from "../context/products/Products.context"
import { ProductCard } from "./ProductCard";
import { ProductType } from "../type/Product";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const ProductsGrid = (props: { children?: any }) => {

    const { products, setProducts } = useProductsContext();
    if (!products?.length) {
        return <div>No hay productos</div>
    }

    const moveElement = (productLIst: ProductType[], startIndex: number, endIndex: number) => {
        const result = [...productLIst];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }

    const handleMoveCard = (dragIndex, hoverIndex) => {
        const movedList = moveElement(products, dragIndex, hoverIndex);
        setProducts(movedList);
    }

    return (
        <div className="grid">
            <DndProvider backend={HTML5Backend}>
                {products.map((product, index) => {
                    return (
                        <ProductCard
                            product={product}
                            key={product.defaultCombinationId}
                            index={index}
                            moveCard={handleMoveCard}
                            id={product.id.toString()}
                        />
                    )
                })}
            </DndProvider>
        </div>
    )
}