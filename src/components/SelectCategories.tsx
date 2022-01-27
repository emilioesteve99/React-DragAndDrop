import styles from "./SelectCategories.module.scss";
import {
  CategoriesContext,
  useCategoriesContext,
} from "../context/categories/Categories.context";
import { useCurrentCategoryContext } from "../context/categories/CurrentCategory.context";
import { useProductsContext } from "../context/products/Products.context";
import { BffHttpService } from "../services/BffHttp.service";

export const SelectCategories = () => {
  const { setProducts } = useProductsContext();
  const { categories } = useCategoriesContext();
  const { setCurrentCategory } = useCurrentCategoryContext();

  const handleCategoriesSelectChange = (event: any) => {
    event.preventDefault();
    const fetchProducts = async () => {
      const categoryId = Number(event.target.value);
      const products = await BffHttpService.getCategoryProducts(categoryId);
      setCurrentCategory(
        categories.find((category) => category.id === categoryId)
      );
      const categoriesCombinationsActive =
        await BffHttpService.getCategorySortConfiguration(categoryId);
      const activeProducts = [];
      const inactiveProducts = [];
      for (const product of products) {
        let isActiveProduct = false;
        for (const { combinationId } of categoriesCombinationsActive) {
          if (product.selectedCombinationId === combinationId) {
            activeProducts.push(product);
            isActiveProduct = true;
          }
        }
        if (!isActiveProduct) inactiveProducts.push(product);
      }
      setProducts([...activeProducts, ...inactiveProducts]);
    };
    fetchProducts();
  };

  return (
    <select
      defaultValue={"Selecciona una categoría"}
      name="Categorías"
      id="categories"
      onChange={handleCategoriesSelectChange}
      className={styles.select}
    >
      <option disabled>{"Selecciona una categoría"}</option>
      {categories.map((category) => {
        return (
          <option
            value={category.id}
            key={category.id}
            id={category.id.toString()}
          >{`${category.id}: ${category.name}`}</option>
        );
      })}
    </select>
  );
};

type PropsType = {};
