import React from "react";
import styles from "./App.module.scss";
import { CategoriesProvider } from "./context/categories/Categories.provider";
import { ProductsProvider } from "./context/products/Products.provider";
import { SelectCategories } from "./components/SelectCategories";
import { ProductsGrid } from "./components/ProductsGrid";
import { CurrentCategoryProvider } from "./context/categories/CurrentCategory.provider";

function App() {
  return (
    <CategoriesProvider>
      <CurrentCategoryProvider>
        <ProductsProvider>
          <div className={styles.columnsContainer}>
            <SelectCategories></SelectCategories>
            <ProductsGrid></ProductsGrid>
          </div>
        </ProductsProvider>
      </CurrentCategoryProvider>
    </CategoriesProvider>
  );
}

export default App;
