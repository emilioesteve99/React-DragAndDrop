import React from "react";
import styles from "./App.module.scss";
import { CategoriesProvider } from "./context/categories/Categories.provider";
import { ProductsProvider } from "./context/products/Products.provider";
import { SelectCategories } from "./components/SelectCategories";
import { ProductsGrid } from "./components/ProductsGrid";
import { CurrentCategoryProvider } from "./context/categories/CurrentCategory.provider";
import { ProductsTable } from "./components/ProductsTable";
import { ButtonSendData } from "./components/ButtonSendData";
import { useEffect, useState } from "react";

function App() {
  const [styleBorder, setStyleBorder] = useState({});
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 200) {
      setStyleBorder({
        boxShadow: "rgb(17 17 27 / 15%) 0px 2px 3px",
        width: "calc(100% + 60px",
        marginLeft: "-30px",
        marginRight: "-30px",
      });
    } else {
      setStyleBorder({
        boxShadow: "unset",
        width: "unset",
        marginLeft: "unset",
        marginRight: "unset",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <CategoriesProvider>
      <CurrentCategoryProvider>
        <ProductsProvider>
          <div className={styles.columnsContainer}>
            <p className="title">
              Arrastrar y soltar los productos en la posición que quieras
              actualizar de la PLP.
            </p>
            <div className={styles.containerFilter} style={styleBorder}>
              <SelectCategories></SelectCategories>
              <ButtonSendData></ButtonSendData>
            </div>

            <ProductsGrid></ProductsGrid>

            {/* <SelectCategories /> */}
            <ProductsTable />
          </div>
        </ProductsProvider>
      </CurrentCategoryProvider>
    </CategoriesProvider>
  );
}

export default App;
