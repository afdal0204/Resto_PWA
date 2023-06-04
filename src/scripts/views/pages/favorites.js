import FavoriteRestaurants from "../../data/favorite-restaurant";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorites = {
    async render() {
        return `
      <a href="#maincontent" class="skip-link" tabindex="0">Menuju ke konten</a>
      <div class="content">
        <h2 class="content-heading">Your Liked Restaurant</h2>
        <div id="list-menu" class="list-menu">
        </div>
      </div>
    `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurants.getAllRestaurants();
        const restaurantsContainer = document.querySelector("#list-menu");
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML +=
                createRestaurantItemTemplate(restaurant);
        });
    },

}
export default Favorites;