import Auth from "./pages/Auth/Auth";
import Basket from "./pages/Basket";
import Profile from "./pages/Profile";
import DevicePage from "./pages/DevicePage";
import Catalogs from "./pages/Catalogs";
import Home from "./pages/Home/Home";

export const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "basket",
    component: <Basket />,
  },
  {
    path: "registration",
    component: <Auth />,
  },
  {
    path: "login",
    component: <Auth />,
  },
  {
    path: "catalog/:name",
    component: <Catalogs />,
  },
  {
    path: "profile",
    component: <Profile />,
  },
  {
    path: "device/:id",
    component: <DevicePage />,
  },
];
// {
//   path: "/",
//   component: <Home />,
// },
// {
//   path: "basket",
//   component: <Basket />,
// },
// {
//   path: "registration",
//   component: <Auth />,
// },
// {
//   path: "login",
//   component: <Auth />,
// },
// {
//   path: "catalog/tires",
//   component: <Tires />,
// },
// {
//   path: "catalog/toils",
//   component: <TOils />,
// },
// {
//   path: "catalog/akoms",
//   component: <Akoms />,
// },
// {
//   path: "catalog/pallets",
//   component: <Pallets />,
// },
// {
//   path: "catalog/glasses",
//   component: <Glasses />,
// },
// {
//   path: "catalog/mainparts",
//   component: <MainParts />,
// },
// {
//   path: "catalog/toils",
//   component: <MOils />,
// },
// {
//   path: "catalog/rims",
//   component: <Rims />,
// },
// {
//   path: "catalog/toils",
//   component: <TOils />,
// },
// {
//   path: "profile",
//   component: <Profile />,
// },
// {
//   path: "device/:id",
//   component: <DevicePage />,
// },
