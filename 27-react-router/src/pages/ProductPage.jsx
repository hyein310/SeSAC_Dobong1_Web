import ProductList from "../components/ProductList";

export default function ProductPage({products}) {
    console.log(products);
    return (
        <main className="ProductPage">
            <p>~~ 상품 목록 ~~</p>
            <ProductList products={products}></ProductList>
        </main>
    )
}