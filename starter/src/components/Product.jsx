import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";

const Product = ({ product }) => {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product));
    toast.success("Item Added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between p-4 hover:scale-110 transition duration-300 ease-in gap-3 mt-10 ml-5 rounded-xl outline">
      <p className="text-gray-700 font-semibold text-lg w-40 mt-1 truncate">
        {product.title}
      </p>
      <p className="text-gray-400 w-40 font-normal text-[10px]">
        {product.description.split(" ").slice(0, 10).join(" ") + "..."}
      </p>
      <div className="h-[180px]">
        <img src={product.image} className="h-full w-full" />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <p className="text-green-600 font-semibold">${product.price}</p>

        {cart.some(cartItem => cartItem.id == product.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}>
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
        text-[12px] p-1 px-3 uppercase 
        hover:bg-gray-700
        hover:text-white transition duration-300 ease-in"
            onClick={addToCart}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
