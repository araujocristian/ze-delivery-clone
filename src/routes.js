import Main from "./pages/Main";
import Products from "./pages/Products";

const routes = [
  { path: "/", component: Main, exact: true },
  { path: "/products/:pocId", component: Products, exact: true }
];

export default routes;
