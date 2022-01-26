import { CategoriesContext, useCategoriesContext } from "../context/categories/Categories.context"
import { useProductsContext } from "../context/products/Products.context"

const baseUrl = 'http://localhost:4100/api/pmi/'

export const SelectCategories = () => {

    const { setProducts } = useProductsContext();
    const { setCurrentCategory, categories } = useCategoriesContext();

    console.log('entra');

    const handleCategoriesSelectChange = (event: any) => {
        event.preventDefault();
        const fetchProducts = async () => {
            const categoryId = Number(event.target.value);
            const response = await (await fetch(`${baseUrl}getCategoryProducts?categoryId=${categoryId}`)).json();
            setProducts(response.data.products);
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