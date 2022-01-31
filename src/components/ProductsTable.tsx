import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useProductsContext } from "../context/products/Products.context";
import { useRef } from "react";
import { NavigateButton } from "./NavigateButton";

export const ProductsTable = () => {
  const { products, setProducts } = useProductsContext();
  const tableRef = useRef(null);

  const createColumnsDefs = () => {
    const columns = [
      "id",
      "name",
      "price",
      "stock",
      "isActive",
      "imageCover",
      "imageHover",
    ];
    return columns.map((column, index) => {
      const baseColumn = {
        colId: column,
        field: column,
      };
      if (index === 0) {
        return {
          ...baseColumn,
          rowDrag: true,
        };
      }
      return baseColumn;
    });
  };

  const mapProductsToRowDataType = () => {
    return products.map((product) => {
      return {
        id: product.id.toString(),
        name: product.name,
        price: product.defaultCombinationPrice,
        stock: product.stock.message1,
        isActive: product.isActive,
        imageCover: product.images?.coverId?.toString(),
        imageHover: product.images?.hoverId?.toString(),
      };
    });
  };

  const handleSaveInContextClick = (event) => {
    event.preventDefault();
    const rows = [];
    tableRef.current.api.forEachNode((node) => {
      rows.push({
        index: node.rowIndex,
        ...node.data,
      });
    });
    const sortedRows = rows.sort((a, b) => a.index - b.index);
    const sortedProducts = [];
    for (const row of sortedRows) {
      sortedProducts.push(
        products.find((product) => product.id === Number(row.id))
      );
    }
    setProducts(sortedProducts);
  };

  if (!products.length) {
    return <div>{"No hay productos 😢"}</div>;
  }

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "100vh", width: "100vh" }}
    >
      <input type="button" value="aaa" onClick={handleSaveInContextClick} />
      <AgGridReact
        rowDragManaged={true}
        rowData={mapProductsToRowDataType()}
        animateRows={true}
        ref={tableRef}
        columnDefs={createColumnsDefs() as any}
        suppressMoveWhenRowDragging={true}
      ></AgGridReact>
    </div>
  );
};
