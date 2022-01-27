import {
  CategoriesContext,
  useCategoriesContext,
} from "../context/categories/Categories.context";
import { useCurrentCategoryContext } from "../context/categories/CurrentCategory.context";
import { useProductsContext } from "../context/products/Products.context";
import { BffHttpService } from "../services/BffHttp.service";

import { Dropdown } from "primereact/dropdown";

export const SelectCategories = () => {
  const { setProducts } = useProductsContext();
  const { categories } = useCategoriesContext();
  const { currentCategory, setCurrentCategory } = useCurrentCategoryContext();

  const handleCategoriesSelectChange = (event: any) => {
    event.preventDefault();
    const fetchProducts = async () => {
      const categoryId = Number(event.value.id);
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

  const countryOptionTemplate = (option) => {
    return (
      <div className="item">
        <div>
          {option.id} {option.name}
        </div>
      </div>
    );
  };

  const categoryDefaultSelect = (option, props) => {
    if (option) {
      return (
        <div>
          <div>{`${option.id}: ${option.name}`}</div>
        </div>
      );
    } else {
      return (
        <div>
          <div>{'Selecciona una categoria'}</div>
        </div>
      )
    }
  }

  console.log(currentCategory);

  return (
    <Dropdown
      value={currentCategory}
      options={categories}
      onChange={handleCategoriesSelectChange}
      optionLabel="name"
      valueTemplate={categoryDefaultSelect}
      filter
      filterBy="name"
      placeholder="Selecciona una categoría:"
      itemTemplate={countryOptionTemplate}
    />
  );
};

type PropsType = {};
