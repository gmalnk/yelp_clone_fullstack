import React from "react";
import StarRatingComponent from "./StarRatingComponent";

const Reviews = ({data})=>{
    // console.log(data)
    
    return (
        <div className="row row-cols-3 mb-2">
            {data.reviews.map((review)=>{
            return(<div key = {review.id} className="card text-white bg-primary mb-3 mr-4" style={{maxWidth:"30%"}}>
                        <div className="card-header d-flex justify-content-between">
                            <span>{review.name}</span>
                            <span><StarRatingComponent rating={review.rating}/></span>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{review.review}</p>
                        </div> 
                    </div>)
            })}
            {/* <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth:"30%"}}>
            <div className="card-header d-flex justify-content-between">
                <span>Jhon Wick</span>
                <span><StarRatingComponent rating={3}/></span>
            </div>
            <div className="card-body">
                <p className="card-text">This restaurant is awesome</p>
            </div> 
        </div>
        <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth:"30%"}}>
            <div className="card-header d-flex justify-content-between">
                <span>Jhon Wick</span>
                <span><StarRatingComponent rating={3}/></span>
            </div>
            <div className="card-body">
                <p className="card-text">This restaurant is awesome</p>
            </div> 
        </div>
        <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth:"30%"}}>
            <div className="card-header d-flex justify-content-between">
                <span>Jhon Wick</span>
                <span><StarRatingComponent rating={3}/></span>
            </div>
            <div className="card-body">
                <p className="card-text">This restaurant is awesome</p>
            </div> 
        </div>
        <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth:"30%"}}>
            <div className="card-header d-flex justify-content-between">
                <span>Jhon Wick</span>
                <span><StarRatingComponent rating={3}/></span>
            </div>
            <div className="card-body">
                <p className="card-text">This restaurant is awesome</p>
            </div> 
        </div>
        <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth:"30%"}}>
            <div className="card-header d-flex justify-content-between">
                <span>Jhon Wick</span>
                <span><StarRatingComponent rating={3}/></span>
            </div>
            <div className="card-body">
                <p className="card-text">This restaurant is awesome</p>
            </div> 
        </div> */}
        </div>
        
        )
}

export default Reviews;