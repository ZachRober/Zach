import ProductItem from './ProductItem.jsx'

function ProductList(props){
    return(
        <>
        <h2>Product List</h2>
        <ul>
        {props.products.map((product)=>(<ProductItem key={product.id} product={product}/>))}{/*imports Product items Li's creates UL*/}
        </ul>
        </>
    )
}
export default ProductList;