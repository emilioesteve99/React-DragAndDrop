import { Button } from "primereact/button";
import { useProductsContext } from "../context/products/Products.context";

export const ButtonSendData = () => {
  const { products } = useProductsContext();

  const handleSendData = () => {
    console.log(products);
  };
  return (
    <Button
      label="Guardar Cambios"
      className="p-button-raised"
      onClick={handleSendData}
    />
  );
};
