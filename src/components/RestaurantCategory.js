import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    {
      showItem ? setShowIndex(false) : setShowIndex(true);
    }
  };
  return (
    <div>
      <div className="bg-gray-100 p-4 w-7/12 mx-auto my-3  hover:bg-gray-200 shadow-lg">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold ">
            {data.title} ({data.itemCards.length})
          </span>
          <span> ⬇</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
