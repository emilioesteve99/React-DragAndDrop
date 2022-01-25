import React from 'react';
import './App.css';
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
      </ProductsProvider>
    </CategoriesProvider>
  )

}

export default App;
