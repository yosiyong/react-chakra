import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Settings } from "../components/pages/Settings";
import { UserList } from "../components/pages/UserList";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_list",
    exact: false,
    children: <UserList />
  },
  {
    path: "/settings",
    exact: false,
    children: <Settings />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
