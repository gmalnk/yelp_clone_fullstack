import React, { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import RestaurantFinder from "../Apis/RestaurantFinder";
import { RestaurantsContext } from "../Context/RestaurantsContext";

const AddReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  const handleAddReview = async (event) => {
    try {
      event.preventDefault();
      if (name === "" || review === "") {
        return;
      }
      const response = await RestaurantFinder.post(`/review/${params.id}`, {
        name,
        rating,
        review,
      });
      // console.log(response)
      navigate("/");
      navigate(location.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(event) => setRating(event.target.value)}
              id="rating"
              className="custom-select"
            >
              <option disabled>Rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            value={review}
            onChange={(event) => setReview(event.target.value)}
            id="Review"
            className="form-control"
          ></textarea>
        </div>
        <button
          onClick={(event) => {
            handleAddReview(event);
          }}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
