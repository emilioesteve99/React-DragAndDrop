import { Button } from "primereact/button";
import { useProductsContext } from "../context/products/Products.context";
import { useCurrentCategoryContext } from "../context/categories/CurrentCategory.context";

const baseUrl = "http://localhost:4100";

export const ButtonSendData = () => {
  const { currentCategory } = useCurrentCategoryContext();
  const { products } = useProductsContext();

  const handleSendData = () => {
    console.log(products);

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
        const response = await fetch(
          `${baseUrl}/api/pmi/saveCategoryProductsOrder`,
          {
            method: "POST",
            body: JSON.stringify(dataToSave),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const json = await response.json();
        if (Object.keys(json).includes("error"))
          console.log("ha habido un error");
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
