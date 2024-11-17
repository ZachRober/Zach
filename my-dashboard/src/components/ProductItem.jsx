
function ProductItem({product}){
    return(
        <li>
            <p>{product.name}</p>{/*Uses props to display each item in the list*/}
            <p>{product.price}</p>
            <p>{product.description}</p>
        </li>
    )
}
export default ProductItem;