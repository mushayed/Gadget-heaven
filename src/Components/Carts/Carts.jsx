import { useContext } from 'react';
import { ProductsContext } from '../Root/Root';
import Cart from '../Cart/Cart';

const Carts = () => {
    const {products, cart} = useContext(ProductsContext)

    const cartProducts = cart.map(cartId => products.find(product => product.product_id === cartId));

    return (
        <div className="flex flex-col gap-6">
            {cartProducts.map((product, idx) => <Cart key={idx} product={product}></Cart>)}
        </div>
    );
};

export default Carts;