import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import RestaurantFinder from "../Apis/RestaurantFinder";
import { RestaurantsContext } from "../Context/RestaurantsContext";
import StarRatingComponent from "./StarRatingComponent";

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        // console.log("&&&&&&&&&&&&&&&&& the axious get all restaurants list is running here and the next log should be the response for the get method used &&&&&&&&&&&&&&&&&&&&&&&&&&&&")
        // console.log(response);
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  const handleDelete = async (event, id) => {
    event.stopPropagation();
    event.preventDefault();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
      // console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (event, id) => {
    event.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) => {
    navigate(`/restaurants/${id}`);
  };

  const handleStarComponent = (restaurants) => {
    return restaurants.count ? (
      <>
        <StarRatingComponent rating={restaurants.average_rating} />
        <span className="text-warning ml-1">({restaurants.count})</span>
      </>
    ) : (
      <span className="text-warning"> 0 reviews</span>
    );
  };

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody className="">
          {restaurants &&
            restaurants.map((restaurants) => {
              return (
                <tr
                  key={restaurants.id}
                  onClick={() => {
                    handleRestaurantSelect(restaurants.id);
                  }}
                >
                  <td>{restaurants.name}</td>
                  <td>{restaurants.location}</td>
                  <td>{"$".repeat(restaurants.price_range)}</td>
                  <td>{handleStarComponent(restaurants)}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={(event) => handleUpdate(event, restaurants.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={(event) => handleDelete(event, restaurants.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {/* <tr>
                        <td>mcd</td>
                        <td>srd</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <td>mcd</td>
                        <td>srd</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
