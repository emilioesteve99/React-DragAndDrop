import React from "react";
import styles from "./ProductTablePage.module.scss";
import { CategoriesProvider } from "../context/categories/Categories.provider";
import { ProductsProvider } from "../context/products/Products.provider";
import { SelectCategories } from "../components/SelectCategories";
import { CurrentCategoryProvider } from "../context/categories/CurrentCategory.provider";
import { ProductsTable } from "../components/ProductsTable";

export const ProductTablePage = () => {
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
              </div>
              <ProductsTable />
            </div>
          </ProductsProvider>
        </CurrentCategoryProvider>
      </CategoriesProvider>
    );
}