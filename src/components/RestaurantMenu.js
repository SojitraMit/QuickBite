import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestaurentMenu(resId);

  if (!resInfo) return <Shimmer />;

  // Extract restaurant name
  const res = resInfo[2]?.card?.card?.info || "Restaurant";

  // Extract itemCards array safely
  const itemCards =
    resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  const list = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const categories = list.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center">
      <h1 className="font-bold m-6 mb-0 text-2xl">{res.name}</h1>

      <div className="flex m-auto flex-wrap justify-center gap-1 mb-4">
        {res.cuisines.map((cus) => (
          <p key={cus} className=" px-1 py-1  text-sm">
            {cus}
          </p>
        ))}
      </div>

      <h2>Menu</h2>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}-{item?.card?.info?.finalPrice/100 || 500}</li>
        ))}
      </ul> */}

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          // controlled component
          showItem={index === showIndex ? true : false}
          setShowIndex={(flag) =>
            flag ? setShowIndex(index) : setShowIndex(null)
          } //when we call this fun. showIndex is changed
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
