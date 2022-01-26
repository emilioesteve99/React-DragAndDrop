export type ProductType = {
    id: number;
    name: string;
    defaultCombinationId: number;
    defaultCombinationPrice: number;
    selectedCombinationId: number;
    selectedCombinationPrice: number;
    rewrite: string;
    is2xh: boolean;
    stock: PmiProductStock;
    images: PmiProductImagesType;
    combinations: PmiProductCombinations[]
    isActive: boolean;
}

type PmiProductImagesType = {
    coverId: number;
    hoverId: number;
}

type PmiProductCombinations = {
    id: number;
    price: number;
    stock: PmiProductStock;
}

type PmiProductStock = {
    statusId: number;
    message1: string;
}