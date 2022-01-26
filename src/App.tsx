import React from 'react';
import styles from './App.module.scss';
import { CategoriesProvider } from './context/categories/Categories.provider';
import { ProductsProvider } from './context/products/Products.provider';
import { SelectCategories } from './components/SelectCategories';
import { ProductsGrid } from './components/ProductsGrid';

function App() {

  return (
    <CategoriesProvider>
      <ProductsProvider>
        <SelectCategories></SelectCategories>
        <ProductsGrid></ProductsGrid>
        <div className={styles.grid}>
          HEHEHE YA FUNCIONA MARC
        </div>
      </ProductsProvider>
    </CategoriesProvider>
  )

}

export default App;
