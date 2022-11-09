import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import AppContext from "../context";
import { dltDevice } from "../http/userAPI";

const Basket = observer(() => {
  const { user } = useContext(AppContext);
  const deleteOne = ({ id }) => {
    dltDevice(id);
    user.setBasketDevices(user.basketDevices.filter((item) => item.id !== id));
    user.setTotalCount(user.basketDevices.length);
  };

  return (
    <ul className="basket py-4 px-5 w-[1000px] mx-auto">
      {user.basketDevices.length === 0 && <p>Корзына пустая</p>}

      {user.basketDevices.map((device) => (
        <li className="flex justify-between m-10 items-center " key={device.id}>
          <img
            src={process.env.REACT_APP_API_URL + device.img}
            width={40}
            height={40}
            alt="Device"
          />
          <div>{device.name}</div>
          <button
            className="rounded border-2 hover:bg-sky-700 hover:text-white p-1 focus:translate-y-1 "
            onClick={() => deleteOne(device)}
          >
            Remove
          </button>
        </li>
      ))}
      <button className="rounded border-2  border-rose-700">
        Оформить заказ
      </button>
    </ul>
  );
});
export default Basket;
