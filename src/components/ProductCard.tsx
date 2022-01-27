// import { DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps } from "react-beautiful-dnd";
import styles from "./ProductCard.module.scss";
import { useRef, useState } from "react";
import { ProductType } from "../type/Product";
import { XYCoord } from "dnd-core";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const style = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #e0e0e0",
  backgroundColor: "white",
  cursor: "move",
};

export const ProductCard = ({ product, id, index, moveCard }: PropsType) => {
  const ref = useRef(null);
  const [value1, setValue1] = useState("");

  const [{ handlerId }, drop] = useDrop({
    accept: "PRODUCT_CARD",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "PRODUCT_CARD",
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const handleMovePosition = () => {
    console.log(value1);
  };

  return (
    <div
      ref={ref}
      className={styles.gridItem}
      style={{ ...style, opacity, gridColumn: product.is2xh ? "span 2" : "" }}
      data-handler-id={handlerId}
    >
      <div>
        <div className={styles.containerImg}>
          <img
            className={styles.imgItem}
            src={`https://www.sklum.com/es/${product.images.coverId}-${
              product.is2xh ? "h_754x540" : "pdp_vertical"
            }/${product.rewrite}.jpg`}
            alt={product.name}
          ></img>
        </div>

        <div className={styles.gridItemInfo}>
          <span>{product.name}</span>
          <span>{product.stock.message1}</span>
        </div>

        <span className={styles.titlePosition}>
          Posición del producto en la lista:
        </span>

        <div className={styles.gridItemExtra}>
          <InputText
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          />
          <Button
            label="Mover"
            className="p-button-raised"
            onClick={handleMovePosition}
          />
        </div>
      </div>
    </div>
  );
};

type PropsType = {
  product: ProductType;
  id?: string;
  index?: number;
  moveCard?: (dragIndex: number, hoverIndex: number) => void;
};

type DragItem = {
  index: number;
  id: string;
  type: string;
};
