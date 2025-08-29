import RestaurantCards, {
  WithVegLable,
  WithNonVegLable,
} from "./RestaurantCards";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Always use useState in function component.
  const [ResList, setResList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filterResList, setfilterResList] = useState([]);
  const { setUserName, loggedInUser } = useContext(UserContext);

  const ResCardVeg = WithVegLable();
  const ResCardNonVeg = WithNonVegLable();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.7644725&lng=72.15193040000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Aggregate restaurants from all relevant cards
    let restaurants = [];
    if (json?.data?.cards) {
      json.data.cards.forEach((card) => {
        if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
          restaurants = restaurants.concat(
            card.card.card.gridElements.infoWithStyle.restaurants
          );
        }
      });
    }

    // Remove duplicates based on info.id
    const uniqueRestaurants = Array.from(
      new Map(restaurants.map((item) => [item.info.id, item])).values()
    );

    // Set the list and filtered list
    setResList(uniqueRestaurants || []);
    setfilterResList(uniqueRestaurants || []);
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline !! Pleace check your internet connection{" "}
      </h1>
    );
  }

  return ResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-2 p-2">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}></input>
          <button
            className="m-2 px-3 py-0.5 bg-green-200 rounded-lg"
            onClick={() => {
              const filterRes = ResList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterResList(filterRes);
            }}>
            search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="border border-solid border-black px-2 mx-5 rounded-lg "
            onClick={() => {
              const filter = ResList.filter((res) => res.info.avgRating > 4.5);
              setfilterResList(filter);
            }}>
            {" "}
            Top rated restaurant
          </button>
          <label>User name : </label>
          <input
            className="border border-black p-1 m-2"
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}></input>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterResList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}>
            {restaurant.info.veg ? (
              <ResCardVeg resData={restaurant} />
            ) : (
              <ResCardNonVeg resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
