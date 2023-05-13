import React, { useContext, useEffect }  from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../Apis/RestaurantFinder";
import AddReview from "../Components/AddReview";
import Reviews from "../Components/reviews";
import StarRatingComponent from "../Components/StarRatingComponent";
import { RestaurantsContext } from "../Context/RestaurantsContext";

const RestaurantDetails = ()=>{
    const {id} = useParams();
    const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext)

    useEffect(()=>{
        const fetchdata = async ()=>{
            try {
                const response = await RestaurantFinder.get(`/${id}`);
                console.log(response);

                setSelectedRestaurant(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata();
    },[])
    
    return <div>
        <h1 style={{textAlign:"center"}}>{selectedRestaurant && selectedRestaurant.restaurants.name}</h1>
        {selectedRestaurant && <div className="text-center">
            <StarRatingComponent rating = {selectedRestaurant.restaurants.average_rating}/>
            <span className="text-warning ml-1">
                {selectedRestaurant.restaurants.count? `(${selectedRestaurant.restaurants.count})`: `(0)`}
            </span>
        </div>}
        {selectedRestaurant && (
            <>
                <div className="mt-3">
                    <Reviews data={selectedRestaurant}/>
                </div>
                <AddReview/>
            </>
        )}
    </div>
};

export default RestaurantDetails;