import Home from "../views/pages/home";
import Detail from "../views/pages/detail";
import Favorites from "../views/pages/favorites";

const routes = {
    "/": Home,
    "/home": Home,
    "/favorites": Favorites,
    "/detail/:id": Detail,
};

export default routes;