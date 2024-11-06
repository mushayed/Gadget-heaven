import { TiDeleteOutline } from "react-icons/ti";

const Cart = ({product}) => {
    const {product_image, product_title, description, price} = product;

    return (
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-start p-8 border-2 rounded-2xl">
            <div className="w-[12rem] h-[7rem]">
                <img className="h-full w-full object-cover" src={product_image} alt="" />
            </div>
            <div className="flex flex-col justify-between w-full gap-2">
                <div className="flex justify-between">
                    <h3 className="text-2xl font-semibold">{product_title}</h3>
                    <button className="text-3xl text-red-600"><TiDeleteOutline /></button>
                </div>
                <p>{description}</p>
                <h3 className="text-xl font-semibold">Price: $ {price}</h3>
            </div>
        </div>
    );
};

export default Cart;