import { CategoriesContext, useCategoriesContext } from "../context/categories/Categories.context"
import { useProductsContext } from "../context/products/Products.context"
import { BffHttpService } from "../services/BffHttp.service";

export const SelectCategories = () => {

    const { setProducts } = useProductsContext();
    const { setCurrentCategory, categories } = useCategoriesContext();

    const handleCategoriesSelectChange = (event: any) => {
        event.preventDefault();
        const fetchProducts = async () => {
            const categoryId = Number(event.target.value);
            const products = await BffHttpService.getCategoryProducts(categoryId);
            setProducts(products);
            setCurrentCategory(categories.find(category => category.id === categoryId));
        }
        fetchProducts();
    }

    return (
        <select defaultValue={'Selecciona una categoría'} name="Categorías" id="categories" onChange={handleCategoriesSelectChange}>
            <option disabled>{'Selecciona una categoría'}</option>
            {categories.map(category => {
                return (
                    <option value={category.id} key={category.id} id={category.id.toString()}>{`${category.id}: ${category.name}`}</option>
                )
            })}
        </select>
    )
}

type PropsType = {

}