import { useState } from "react";
import { LIST_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          data-testid="foodItems"
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
          <div className="w-140 p-2">
            <div className="text-lg py-2">
              <span>{item.card.info.name}</span>
              <br></br>

              {item.card.info.price ? (
                <span className="text-gray-800 text-[15px]">
                  ₹{item.card.info.price / 100}
                </span>
              ) : (
                <span className="text-gray-800 text-[15px]">
                  ₹{item.card.info.defaultPrice / 100}
                </span>
              )}
            </div>
            <div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          <div className="h-[180px] w-[230px]  ">
            <img
              className="object-cover h-[100%] w-[100%] rounded-lg text-lg text-center"
              src={
                item.card.info.imageId
                  ? LIST_URL + item.card.info.imageId
                  : "https://static.vecteezy.com/system/resources/previews/003/170/825/non_2x/isolated-food-plate-fork-and-spoon-design-free-vector.jpg"
              }
              alt="Food image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
