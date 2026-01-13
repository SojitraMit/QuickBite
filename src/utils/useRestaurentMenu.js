import { useEffect, useState } from "react";
import mockMenu from "../components/Mocks/mockResMenu.json";

const useRestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    // simulate API call
    setResInfo(mockMenu?.data?.cards || []);
  }, []);

  return resInfo;
};

export default useRestaurentMenu;
