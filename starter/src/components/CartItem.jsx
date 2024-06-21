import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex flex-col items-center justify-between p-4 hover:scale-110 transition duration-300 ease-in gap-3 mt-10 ml-5 rounded-xl outline">
      <div>
        <div className="h-[180px]">
          <img src={item.image} alt="Image" className="h-full w-full" />
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg w-40 mt-1 truncate">
            {item.title}
          </h1>
          <h1 className="text-gray-400 w-40 font-normal text-[10px]">
            {item.description}
          </h1>
          <div className="flex justify-between gap-12 items-center w-full mt-5">
            <p>${item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
