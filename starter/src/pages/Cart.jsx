import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector(state => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex justify-between">
          <div className="flex flex-wrap mx-auto p-2 space-y-10 space-x-5 min-h-[80vh]">
            {cart.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
          </div>
          <div className="border-l-8 justify-center items-center mt-10 mr-10">
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p>Total Amount: ${totalAmount}</p>
              <button>CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-20">
          <h1>Cart Empty</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
