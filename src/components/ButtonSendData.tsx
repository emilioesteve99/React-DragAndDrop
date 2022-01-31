import { Button } from "primereact/button";
import { useProductsContext } from "../context/products/Products.context";
import { useCurrentCategoryContext } from "../context/categories/CurrentCategory.context";
import { BffHttpService } from "../services/BffHttp.service";

export const ButtonSendData = () => {
  const { currentCategory } = useCurrentCategoryContext();
  const { products } = useProductsContext();

  const handleSendData = () => {
    const saveProductsOrder = async () => {
      const dataToSave = {
        categoryId: currentCategory.id,
        products: products.map((product) => ({
          id: product.id,
          defaultCombinationId: product.defaultCombinationId,
          selectedCombinationId: product.selectedCombinationId,
        })),
      };
      try {
        const response = await BffHttpService.saveCategoryProductsOrer(dataToSave);
      } catch (error) {}
    };
    saveProductsOrder();
  };
  return (
    <Button
      label="Guardar Cambios"
      className="p-button-raised"
      onClick={handleSendData}
    />
  );
};
