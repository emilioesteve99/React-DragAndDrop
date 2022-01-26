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

    public static async getVerticalCategories (verticalId: number) {
        try {
            const response = await this.request(`pmi/getCategories?verticalId=${verticalId}`, 'GET');
            return response.data.categories;
        } catch (error) {
            console.log(error);
        }
    }

    public static async getCategoryProducts (categoryId: number) {
        try {
            const response = await this.request(`pmi/getCategoryProducts?categoryId=${categoryId}`, 'GET');
            return response.data.products;
        } catch (error) {
            console.log(error);
        }
    }

}

type HttpMethodType = 'GET' | 'POST' | 'DELETE' | 'DISPATCH';
type HttpResponseType = {
    data: any;
    error: any;
    messages: any[];
}