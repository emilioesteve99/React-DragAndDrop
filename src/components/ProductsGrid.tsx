import styles from "./ProductsGrid.module.scss";
import { useProductsContext } from "../context/products/Products.context";
import { ProductCard } from "./ProductCard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { moveProduct } from "../utils/moveProduct";

export const ProductsGrid = (props: { children?: any }) => {
  const { products, setProducts } = useProductsContext();
  if (!products?.length) {
    return <div>No hay productos</div>;
  }

  // const handleProductsDragEnd = (result: DropResult, _provided: ResponderProvided) => {
  //     if (!result?.destination) return;
  //     if (result.source.index === result.destination.index) return;
  //     setProducts(moveElement(products, result.source.index, result.destination.index));
  // }

  const handleMoveCard = (dragIndex: number, hoverIndex: number) => {
    const movedList = moveProduct(products, dragIndex, hoverIndex);
    setProducts(movedList);
  };
  return (
    <div className={styles.grid}>
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
          );
        })}
      </DndProvider>
    </div>
  );
};
