import { CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  sla,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{sla.lastMileTravelString}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
