import { useContext, useState } from "react";
import AppContext from "../context";

export const useCart = () => {
  const { user } = useContext(AppContext);
  const [totalCount, setTotalCount] = useState(0);
  const basketDevices = user.basketDevices;
  const setBasketDevices = user.setBasketDevices;

  const totalPrice = basketDevices.reduce((sum, item) => item.price + sum, 0);

  return {
    basketDevices,
    setBasketDevices,
    totalPrice,
    totalCount,
    setTotalCount,
  };
};
