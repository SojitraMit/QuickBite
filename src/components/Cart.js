import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      <h1 className="m-5 text-xl font-bold">cart</h1>
      <button
        className="float-right mr-84 text-sm border text-green-900 px-2 rounded-lg cursor-pointer"
        onClick={handleClearCart}>
        Clear Cart
      </button>

      {cartItem.length === 0 && (
        <h1 className="mt-24 text-lg">
          cart is empty!!.<br></br> Pleace add some items.{" "}
        </h1>
      )}

      <div className="mt-13 w-7/12 mx-auto">
        <CartCard items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
