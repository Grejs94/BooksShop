import { MainPage, BasketPage } from "pages";

export const mainRoutes = [
  {
    path: "/",
    component: MainPage,
    exact: true,
  },
  {
    path: "/BasketPage",
    component: BasketPage,
  },
];
