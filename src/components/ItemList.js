import { LIST_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-6 mt-3">
      {items.map((item, index) => {
        const isInCart = cartItems.some(
          (cart) => cart.card.info.id === item.card.info.id
        );

        return (
          <div
            key={index}
            data-testid="foodItems"
            className="
              flex justify-between items-start
              bg-white rounded-2xl border border-gray-200
              p-6 shadow-md
              hover:shadow-xl hover:-translate-y-1
              transition-all duration-300 ease-in-out
            ">
            {/* LEFT CONTENT */}
            <div className="w-[65%]">
              <h3 className="font-semibold text-xl text-gray-800">
                {item.card.info.name}
              </h3>

              <p className="text-gray-800 font-semibold mt-2">
                ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </p>

              <p className="text-sm text-gray-500 mt-3 leading-relaxed line-clamp-3">
                {item.card.info.description}
              </p>
            </div>

            {/* RIGHT IMAGE + BUTTON */}
            <div className="relative w-[190px] h-[140px] shrink-0">
              <img
                className="
                  w-full h-full object-cover rounded-xl
                  transition-transform duration-300
                  hover:scale-105
                "
                src={
                  item.card.info.imageId
                    ? LIST_URL + item.card.info.imageId
                    : "https://static.vecteezy.com/system/resources/previews/003/170/825/non_2x/isolated-food-plate-fork-and-spoon-design-free-vector.jpg"
                }
                alt="Food"
              />

              <button
                disabled={isInCart}
                onClick={() => handleAddItem(item)}
                className={`
                  absolute -bottom-5 left-1/2 -translate-x-1/2
                  px-5 py-2 text-sm font-semibold rounded-xl
                  border shadow-lg transition-all duration-200
                  ${
                    isInCart
                      ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                      : "bg-white text-green-600 hover:bg-green-600 hover:text-white"
                  }
                `}>
                {isInCart ? "Added ✅" : "Add +"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
