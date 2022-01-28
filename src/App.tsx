import React from "react";
import styles from "./App.module.scss";
import { CategoriesProvider } from "./context/categories/Categories.provider";
import { ProductsProvider } from "./context/products/Products.provider";
import { SelectCategories } from "./components/SelectCategories";
import { ProductsGrid } from "./components/ProductsGrid";
import { CurrentCategoryProvider } from "./context/categories/CurrentCategory.provider";
import { ButtonSendData } from "./components/ButtonSendData";

function App() {
  return (
    <CategoriesProvider>
      <CurrentCategoryProvider>
        <ProductsProvider>
          <div className={styles.columnsContainer}>
            <p className="title">
              Arrastrar y soltar los productos en la posición que quieras
              actualizar de la PLP.
            </p>
            <div className={styles.containerFilter}>
              <SelectCategories></SelectCategories>
              <ButtonSendData></ButtonSendData>
            </div>
            <ProductsGrid></ProductsGrid>
          </div>
        </ProductsProvider>
      </CurrentCategoryProvider>
    </CategoriesProvider>
  );
}

export default App;
