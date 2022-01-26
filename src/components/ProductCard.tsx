import { DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps } from "react-beautiful-dnd";
import { ProductType } from "../type/Product";

export const ProductCard = ({product, dragHandleProps, draggableProps, draggableInnerRef}: PropsType) => {
    return (
        <div {... dragHandleProps} {... draggableProps} ref={draggableInnerRef}>
            <h2>{product.name}</h2>
        </div>
    )
}

type PropsType = {
    product: ProductType;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps;
    draggableInnerRef: (element?: HTMLElement | null) => any;
}