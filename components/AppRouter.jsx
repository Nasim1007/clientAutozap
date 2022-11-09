import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { routes } from "../routes";

export default function AppRouter() {
  const id = useParams();
  console.log("Approuter:", id);
  return (
    <Routes>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
}
