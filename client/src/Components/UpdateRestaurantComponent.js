import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantFinder from "../Apis/RestaurantFinder";

const UpdateRestaurantComponent = () => {
  const params = useParams();
  const reducer = (state, action) => {
    switch (action.type) {
      case "all":
        return action.value;
      case "name":
        // console.log(action);
        return {
          name: action.value,
          location: state.location,
          price_range: state.price_range,
        };
      case "location":
        // console.log(action);
        return {
          location: action.value,
          name: state.name,
          price_range: state.price_range,
        };
      case "price_range":
        // console.log(action);
        return {
          name: state.name,
          location: state.location,
          price_range: action.value,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    location: "",
    price_range: "priceRange",
  });
  let navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await RestaurantFinder.get(`/${params.id}`);
        // console.log(response);
        dispatch({
          type: "all",
          value: {
            name: response.data.data.restaurants.name,
            location: response.data.data.restaurants.location,
            price_range: response.data.data.restaurants.price_range,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  const handleSubmitUpdate = async (event) => {
    event.preventDefault();
    const response = await RestaurantFinder.put(`/${params.id}`, state);
    // console.log(response);
    navigate("/");
  };
  return (
    <div>
      <form action="">
        <div className="form-group my-3">
          <label htmlFor="name">Name</label>
          <input
            value={state.name}
            onChange={(event) => {
              dispatch({ type: "name", value: event.target.value });
            }}
            id="name"
            className="form-control"
            type="text"
            placeholder="--"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="location">Location</label>
          <input
            value={state.location}
            onChange={(event) => {
              dispatch({ type: "location", value: event.target.value });
            }}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="price_range" className="px-3">
            Price Range
          </label>
          <select
            value={state.price_range}
            onChange={(event) => {
              dispatch({ type: "price_range", value: event.target.value });
            }}
            id="location"
            className="custom-select"
            type="number"
          >
            <option disabled>Rating</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <button
          className="btn btn-primary"
          onClick={(event) => handleSubmitUpdate(event)}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurantComponent;
