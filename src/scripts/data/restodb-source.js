import API_ENDPOINT from "../globals/api-endpoint";
import UrlParser from "../routes/url-parser";

class RestaurantDbSource {
    static async restaurants() {
        const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailRestaurants(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    static async menus() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const detail = await this.detailRestaurants(url.id);
        return detail.restaurant.menus;
    }

    static async foodList() {
        const { foods } = await this.menus();
        const listOfFood = [];

        foods.forEach((food) => {
            const foodItem = food.name;
            listOfFood.push(foodItem);
        });

        return listOfFood.join(", ");
    }

    static async beverageList() {
        const { drinks } = await this.menus();
        const listOfBeverage = [];

        drinks.forEach((drink) => {
            const beverage = drink.name;
            listOfBeverage.push(beverage);
        });

        return listOfBeverage.join(", ");
    }

    static async customerReviews() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const detail = await this.detailRestaurants(url.id);
        const { customerReviews } = await detail.restaurant;
        const reviews = [];

        customerReviews.forEach((customerReview) => {
            const { name } = customerReview;
            const { review } = customerReview;
            const { date } = customerReview;
            reviews.push(`
        nama: ${name} <br>
        komentar: ${review} <br>
        tanggal: ${date} <br><br>
      `);
        });
        return reviews.join("");
    }
}

export default RestaurantDbSource;