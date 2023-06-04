import UrlParser from "../../routes/url-parser";
import RestaurantDbSource from "../../data/restodb-source";
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
    async render() {
        return `
      <div class="container-detail">
        <a href="#content-heading" class="skip-link">Menuju ke konten</a>
        <div id="list-menu" class="list-menu"></div>
        <div id="likeButtonContainer"></div>
      </div>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantDbSource.detailRestaurants(url.id);
        const restaurantContainer = document.querySelector("#list-menu");
        const foods = await RestaurantDbSource.foodList();
        const beverages = await RestaurantDbSource.beverageList();
        const reviews = await RestaurantDbSource.customerReviews();
        // eslint-disable-next-line max-len
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant, foods, beverages, reviews);

        const likeButtonContainer = document.querySelector('#likeButtonContainer');
        likeButtonContainer.innerHTML = createLikeButtonTemplate();
        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: restaurant.restaurant,
        });
    },
};

export default Detail;