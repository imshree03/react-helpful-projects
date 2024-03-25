import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector(state => state);

  return (
    <div className="flex justify-between max-w-6xl mx-auto items-center h-20">
      <NavLink to="/">
        <div>
          <img src="/logo.png" className="h-14" />
        </div>
      </NavLink>
      <div className="flex space-x-6 items-center text-slate-100 font-medium">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl" />
            {/* {bouncing no. of items added in cart} */}
            {cart.length > 0 && (
              <span
                className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
