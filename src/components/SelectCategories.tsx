import { CategoriesContext } from "../context/categories/Categories.context"
import { useProductsContext } from "../context/products/Products.context"

const baseUrl = 'http://localhost:4100/api/pmi/'

export const SelectCategories = () => {

    const {setProducts} = useProductsContext();

    const handleCategoriesSelectChange = (event: any) => {
        event.preventDefault();
        const fetchProducts = async () => {
            const categoryId = event.target.value.toString();
            const response = await (await fetch(`${baseUrl}getCategoryProducts?categoryId=`)).json();
            setProducts(response.data.products);
        }
        fetchProducts();
    }

    return (
        <CategoriesContext.Consumer>
            {value => {
                return (
                    <select defaultValue={'Selecciona una categoría'} name="Categorías" id="categories" onChange={handleCategoriesSelectChange}>
                        <option disabled>{'Selecciona una categoría'}</option>
                        {value.categories.map(category => {
                            return (
                                <option value={category.id} key={category.id} id={category.id.toString()}>{`${category.id}: ${category.name}`}</option>
                            )
                        })}
                    </select>
                )
            }}
        </CategoriesContext.Consumer>
    )
}

type PropsType = {

}