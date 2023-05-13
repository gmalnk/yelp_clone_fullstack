import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom"
import RestaurantFinder from "../Apis/RestaurantFinder";

const UpdateRestaurantComponent =() => {
    const params = useParams();
    console.log(params);
    const [name,setName] = useState("");
    const [location,setLocation] = useState("");
    const [priceRange,setpriceRange] = useState("");
    let navigate = useNavigate();

    useEffect(()=>{
        const fetchdata = async ()=>{
            try {
                const response = await RestaurantFinder.get(`/${params.id}`)
                console.log(response)
                setName(response.data.data.restaurant.name);
                setLocation(response.data.data.restaurant.location);
                setpriceRange(response.data.data.restaurant.price_range);
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata();
    },[])
    const handleSubmitUpdate = async (event)=>{
        event.preventDefault()
        const response = await RestaurantFinder.put(`/${params.id}`,{
            name,
            location,
            price_range:priceRange
        })
        console.log(response)
        navigate("/")
    }
    return(<div>
        <form action="">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    value = {name}
                    onChange = {(event)=>{setName(event.target.value)}}
                    id= "name" 
                    className="form-control" 
                    type="text"
                    placeholder="--" />
            </div>
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input 
                    value = {location}
                    onChange = {(event)=>{setLocation(event.target.value)}}
                    id= "location" 
                    className="form-control" 
                    type="text"/>
            </div>
            <div className="form-group">
                <label htmlFor="price_range">Price Range</label>
                <input 
                    value = {priceRange}
                    onChange = {(event)=>{setpriceRange(event.target.value)}}
                    id= "location" 
                    className="form-control" 
                    type="number"/>
            </div>
            <button className="btn btn-primary" onClick={(event)=>handleSubmitUpdate(event)} type="submit">Submit</button>
        </form>
    </div>)
}

export default UpdateRestaurantComponent;