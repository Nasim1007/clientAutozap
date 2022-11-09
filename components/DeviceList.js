import { useContext, useEffect } from "react";
import AppContext from "../context";
import { useNavigate } from "react-router-dom";
import images from "../assets/image/images.png";
import { observer } from "mobx-react-lite";
import { fetchDevices } from "../http/deviceAPI";

const DeviceList = observer(({ category = null }) => {
  const navigate = useNavigate();
  const { device } = useContext(AppContext);
  useEffect(() => {
    // fetchTypes().then((data) => device.setTypes(data));
    // fetchBrands().then((data) => device.setBrands(data));
    fetchDevices(null, category, null, null, 1, 20).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, []);

  return (
    <div className="flex px-[80px] pb-[40px] flex-wrap pb-4 justify-center">
      {device.devices.map((device) => (
        <div key={device.id} onClick={() => navigate("/device/" + device.id)}>
          <div
            className="card py-1 px-2 flex m-2 justify-center flex-column bg-white"
            style={{ width: 200, cursor: "pointer", height: 270 }}
          >
            <div className="w-[100px] h-[150px] ml-auto mr-auto">
              <img
                className="h-full mx-auto"
                src={process.env.REACT_APP_API_URL + device.img}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div>{device.brand} ... </div>
              <div className="flex items-center">
                <div>{device.rating}</div>
                <img src={images} width={18} height={18} alt="" />
              </div>
            </div>
            <div>{device.name} </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default DeviceList;
