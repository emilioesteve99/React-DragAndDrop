import { CategoryType } from "../type/Category";
import { CategoryCombinationActiveType } from "../type/CategoryCombinationActive";
import { ProductType } from "../type/Product";

export class BffHttpService {

    private static baseUrl = 'http://localhost:4100/api/';

    private static async request(url: string, method: HttpMethodType, body?: any): Promise<HttpResponseType>{
        try {
            const response = await fetch(`${this.baseUrl}${url}`, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body ? JSON.stringify(body) : null
            })
            return response.json();
        } catch (error) {
            console.log(error);
        }
    }

    public static async getVerticalCategories (verticalId: number): Promise<CategoryType[]> {
        try {
            const response = await this.request(`pmi/getCategories?verticalId=${verticalId}`, 'GET');
            return response.data.categories;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    public static async getCategoryProducts (categoryId: number): Promise<ProductType[]> {
        try {
            const response = await this.request(`pmi/getCategoryProducts?categoryId=${categoryId}`, 'GET');
            return response.data.products;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    public static async getCategorySortConfiguration (categoryId: number): Promise<CategoryCombinationActiveType[]> {
        try {
            const reponse = await this.request(`pmi/getCategorySortConfiguration?categoryId=${categoryId}`, 'GET');
            return reponse.data.categorySort;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

}

type HttpMethodType = 'GET' | 'POST' | 'DELETE' | 'DISPATCH';
type HttpResponseType = {
    data: any;
    error: any;
    messages: any[];
}