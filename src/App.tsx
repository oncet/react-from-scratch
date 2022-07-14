import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <h1>This is the app!</h1>
      <Outlet />
    </>
  );
};
