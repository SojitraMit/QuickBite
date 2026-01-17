import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handlePlaceOrder = () => {
    dispatch(clearCart());
    alert("Your order has been placed successfully!");
    navigate("/");
  };

  return (
    <div className="text-center">
      <h1 className="m-5 text-xl font-bold">cart</h1>
      <button
        className="float-right mr-84 text-sm border text-green-800 hover:bg-slate-200 px-2 rounded-lg cursor-pointer"
        onClick={handleClearCart}>
        Clear Cart
      </button>

      {cartItem.length === 0 ? (
        <h1
          className="mt-24 text-lg underline text-blue-900 cursor-pointer hover:text-blue-600"
          onClick={() => navigate("/")}>
          Cart is empty!!.<br></br> Click here to add some items.{" "}
        </h1>
      ) : (
        <div>
          <div className="mt-13 w-7/12 mx-auto">
            <CartCard items={cartItem} />
          </div>
          <button
            className="bg-red-500 px-20 py-3 rounded-2xl my-5 cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-red-900 text-white font-bold"
            onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
