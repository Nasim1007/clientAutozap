import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
export const login = async (email, password, basket) => {
  const { data } = await $host.post("api/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
export const createBasket = async (device) => {
  const { data } = await $host.post("api/basket", device);
  return data;
};
export const fetchBasket = async (email) => {
  const { data } = await $authHost.get("api/basket", {
    params: {
      email,
    },
  });
  return data;
};
export const dltDevice = async (id) => {
  const { data } = await $host.delete("api/basket/" + id);
  return data;
};
