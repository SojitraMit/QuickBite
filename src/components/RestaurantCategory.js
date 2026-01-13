import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    showItem ? setShowIndex(false) : setShowIndex(true);
  };

  return (
    <div className="w-8/12 mx-auto my-5 ">
      {/* CATEGORY HEADER */}
      <div
        onClick={handleClick}
        className="
          flex justify-between items-center
          bg-gray-200 hover:bg-gray-300
          px-6 py-4
          rounded-xl cursor-pointer
          shadow-md hover:shadow-lg
          transition-all duration-300 ease-in-out
        ">
        <span className="font-bold text-lg text-gray-800">
          {data.title}{" "}
          <span className="text-gray-500 text-sm">
            ({data.itemCards.length})
          </span>
        </span>

        {/* ARROW */}
        <span
          className={`
            text-xl transition-transform duration-300
            ${showItem ? "rotate-180" : "rotate-0"}
          `}>
          ⌄
        </span>
      </div>

      {/* ITEM LIST */}
      {showItem && (
        <div className="mt-4 transition-all duration-300 ease-in-out">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
