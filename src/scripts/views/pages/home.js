/* eslint-disable no-undef */
import RestaurantDbSource from "../../data/restodb-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
    async render() {
        return `
  <div class="hero" style="
          background-image: linear-gradient(
              rgba(0, 0, 5, 0.5),
              rgba(0, 0, 5, 0.5)
            ),
            url('images/heros/hero-image_2.jpg');
        " >
            <div class="_heroinner">
                <p class="_herosub">Hallo semuanya! Selamat datang di AW Resto</p>
            </div>
        </div>
  <section class="content">
    <h2 class="maincontent" id="maincontent">Explore Restaurant</h2>
    <div id="list-menu" class="list-menu">
  </section>
    `;
    },

    async afterRender() {
        const restaurants = await RestaurantDbSource.restaurants();
        const restaurantsContainer = document.querySelector("#list-menu");
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML +=
                createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Home;