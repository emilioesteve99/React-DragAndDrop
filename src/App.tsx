import React from "react";
import styles from "./App.module.scss";
import { CategoriesProvider } from "./context/categories/Categories.provider";
import { ProductsProvider } from "./context/products/Products.provider";
import { SelectCategories } from "./components/SelectCategories";
import { ProductsGrid } from "./components/ProductsGrid";
import { CurrentCategoryProvider } from "./context/categories/CurrentCategory.provider";
import { ProductsTable } from "./components/ProductsTable";
import { ButtonSendData } from "./components/ButtonSendData";

function App() {
  return (
    <CategoriesProvider>
      <CurrentCategoryProvider>
        <ProductsProvider>
          <div className={styles.columnsContainer}>
            <SelectCategories />
            {/*<ProductsGrid />*/}
            <ProductsTable />
          </div>
        </ProductsProvider>
      </CurrentCategoryProvider>
    </CategoriesProvider>
    // <ProductsTable />
  );
}

export default App;
