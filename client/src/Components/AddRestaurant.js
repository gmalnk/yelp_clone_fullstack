import React, { useContext, useState } from "react";
import RestaurantFinder from "../Apis/RestaurantFinder";
import { RestaurantsContext } from "../Context/RestaurantsContext";

const AddRestaurant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange,
      });
      // console.log(response.data.data)
      setName("");
      setLocation("");
      setPriceRange("Price Range");
      setRestaurants([...restaurants, response.data.data.restaurants]);
      // console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col-sm">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col-sm">
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              type="text"
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col-sm">
            <select
              value={priceRange}
              onChange={(event) => setPriceRange(event.target.value)}
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            onClick={(event) => handelSubmit(event)}
            className="btn btn-primary"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
