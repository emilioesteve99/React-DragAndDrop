import { ProductType } from "../type/Product";

export const moveProduct = (
    productLIst: ProductType[],
    startIndex: number,
    endIndex: number
  ) => {
    const result = [...productLIst];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };