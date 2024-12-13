export default function ProductGrid({ products }) {
    return (
        <ul className={'flex flex-wrap'}>
            {products.length > 0 ? (
                products.map((product) => (
                    <li key={product.id} className={'w-64 m-8'}>
                        <a href={`/product/${product.id}`} className={'block'} >
                            <h3>{product.title}</h3>

                            {product.images && product.images.length > 0 && (
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className={'object-scale-down w-64 h-64'}
                                />
                            )}
                            <h2>{product.description}</h2>
                            <h2 className={'mt-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md w-max px-4'}>{product.price + ' €'}</h2>
                        </a>
                    </li>
                ))
            ) : (
                <p>Aucun produit trouvé</p>
            )}
        </ul>
    );
}
