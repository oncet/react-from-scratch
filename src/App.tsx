import { Outlet } from "react-router-dom";
import { Header } from "./Hader";
import { Input } from "./Input";

export const App = () => {
  return (
    <>
      <Header />
      <Input />
      <Outlet />
    </>
  );
};

// if (module.hot) {
//   module.hot.accept();
// }
