import RestaurantCards, {
  WithVegLable,
  WithNonVegLable,
} from "./RestaurantCards";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import resCardData from "../components/Mocks/resCardMock.json";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { setUserName, loggedInUser } = useContext(UserContext);

  const ResCardVeg = WithVegLable();
  const ResCardNonVeg = WithNonVegLable(RestaurantCards);

  useEffect(() => {
    loadMockData();
  }, []);

  const loadMockData = () => {
    const json = resCardData; // ✅ already parsed JSON

    let restaurants = [];

    json?.data?.cards?.forEach((card) => {
      const res = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (res) {
        restaurants = restaurants.concat(res);
      }
    });

    // Remove duplicate restaurants
    const uniqueRestaurants = Array.from(
      new Map(restaurants.map((item) => [item.info.id, item])).values(),
    );

    setResList(uniqueRestaurants);
    setFilteredResList(uniqueRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1 className="text-center mt-10 text-xl">
        Looks like you are offline! Please check your internet connection.
      </h1>
    );
  }

  if (resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      {/* FILTER SECTION */}
      <div className="filter flex flex-wrap items-center gap-4 my-4 mx-14 ">
        {/* SEARCH */}
        <div className="search">
          <input
            type="text"
            className="border border-black p-1"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="ml-2 px-3 py-1 bg-green-200 rounded-lg cursor-pointer"
            onClick={() => {
              const filtered = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredResList(filtered);
            }}>
            Search
          </button>
        </div>

        {/* TOP RATED */}
        <button
          className="border border-black px-3 py-1 rounded-lg cursor-pointer hover:bg-slate-200"
          onClick={() => {
            const filtered = resList.filter((res) => res.info.avgRating > 4.5);
            setFilteredResList(filtered);
          }}>
          Top Rated Restaurants
        </button>

        {/* USERNAME */}
        <div className="flex items-center">
          <label className="mr-2">User name:</label>
          <input
            className="border border-black p-1 h-7"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      {/* RESTAURANT CARDS */}
      <div className="flex flex-wrap justify-center gap-5">
        {filteredResList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}>
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
