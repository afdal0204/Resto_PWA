import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant, foods, beverages, review) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant-poster" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant-info">
  <h3>Information</h3>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="menus">
    <h3>Makanan</h3>
    <p>${foods}</p>
    <br>
    <h3>Minuman</h3>
    <p>${beverages}</p>
    <br>
    <h3>Review Pelanggan</h3>
    <p>${review}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item-header">
      <img class="restaurant-item-header-poster" alt="${restaurant.name}"
        src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}">
      <div class="restaurant-item-header-rating">
        <p>
          ⭐️<span class="restaurant-item-header-rating-score">${restaurant.rating}</span>
        </p>
      </div>
    </div>
    <div class="restaurant-item-content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantDetailTemplate,
    createRestaurantItemTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};