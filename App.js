import Header from "./components/Header/Header";
import "./App.css";
import AppRouter from "./components/AppRouter";
import AppContext from "./context";
import DeviceStore from "./store/DeviceStore";
import UserStore from "./store/UserStore";
import { observer } from "mobx-react-lite";
// import { useContext, useEffect, useState } from "react";
// import { check } from "./http/userAPI";

const App = observer(() => {
  // const { user } = useContext(AppContext);
  // const [isLoadind, setIsLoading] = useState(true);

  // useEffect(() => {
  //   check()
  //     .then((data) => {
  //       user.setUser(data);
  //       user.setIsAuth(true);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);
  return (
    <AppContext.Provider
      value={{
        device: new DeviceStore(),
        user: new UserStore(),
      }}
    >
      <div className="App">
        <Header />
        <AppRouter />
      </div>
    </AppContext.Provider>
  );
});
export default App;
