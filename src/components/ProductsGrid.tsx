import { useProductsContext } from "../context/products/Products.context"
import { ProductCard } from "./ProductCard";
// import { DragDropContext, Droppable, Draggable, DropResult, ResponderProvided } from 'react-beautiful-dnd';
import { ProductType } from "../type/Product";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Card } from "../dnd/Card";



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

    // const handleProductsDragEnd = (result: DropResult, _provided: ResponderProvided) => {
    //     if (!result?.destination) return;
    //     if (result.source.index === result.destination.index) return;
    //     setProducts(moveElement(products, result.source.index, result.destination.index));
    // }

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