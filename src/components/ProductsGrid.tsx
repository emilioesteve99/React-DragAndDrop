import { useProductsContext } from "../context/products/Products.context"
import { ProductCard } from "./ProductCard";
import { DragDropContext, Droppable, Draggable, DropResult, ResponderProvided } from 'react-beautiful-dnd';
import { ProductType } from "../type/Product";

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

    const handleProductsDragEnd = (result: DropResult, _provided: ResponderProvided) => {
        if(!result?.destination) return;
        if(result.source.index === result.destination.index) return;
        setProducts(moveElement(products, result.source.index, result.destination.index));
    }

    return <DragDropContext onDragEnd={handleProductsDragEnd}>
        <Droppable droppableId="products">
            {(droppableProvided) => {
                return (
                    <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
                        {products.sort().map((product, index) => {
                            return (
                                <Draggable key={product.id} draggableId={product.id.toString()} index={index}>
                                    {(draggableProvided) => {
                                        return (
                                            <ProductCard
                                                product={product}
                                                draggableInnerRef={draggableProvided.innerRef}
                                                draggableProps={draggableProvided.draggableProps}
                                                dragHandleProps={draggableProvided.dragHandleProps}
                                            />
                                        )
                                    }}
                                </Draggable>
                            )
                        })}
                        {droppableProvided.placeholder}
                    </div>
                )
            }}
        </Droppable>
    </DragDropContext>
}