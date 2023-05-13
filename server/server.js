require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

// this is a middle ware 
// it specifically needs to be above all the route hnadlers 
// this files runs from top to bottom finds the first middleware which is matching and runs it
// runs for all the requests coming for 3000 local host port
// this can be ran multiple times
app.use((req,res,next)=>{
    console.log("our first middle ware is up and running hurry!");
    next();
});

app.use((req,res,next)=>{
    console.log("our second middle ware is up and running hurry!");
    next();
});

//json middle ware
app.use(express.json())

//cors middle ware
app.use(cors())

// get all restaurants
app.get("/api/v1/restaurants", async (req,res)=>{
    console.log("our route handler ran");
    // console.log("hello my first route is up and working!")
    // res.send("here are the restaurants!")
    try {
        const results = await db.query("SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(rating) as count, TRUNC(AVG(rating),1) as average_rating from reviews GROUP BY restaurant_id ) reviews on restaurants.id = reviews.restaurant_id ");
        console.log(results);
        res.status(200).json({
            status: "success",
            results : results.rows.length,
            data :{
                restaurants:results.rows,
            },
        });   
    } catch (error) {
        console.log(error);
    }
    
});

// get a restaurant based on id
app.get("/api/v1/restaurants/:restaurants_id",async (req,res)=>{
    console.log(req.params);
    try {
        const restaurants = await db.query("SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(rating) as count, TRUNC(AVG(rating),1) as average_rating from reviews GROUP BY restaurant_id ) reviews on restaurants.id = reviews.restaurant_id WHERE id = $1",[req.params.restaurants_id]);
        console.log(restaurants.rows[0]);
        const reviews = await db.query("SELECT * FROM reviews WHERE restaurant_id = $1",[req.params.restaurants_id]);
        console.log(reviews.rows);
        res.status(202).json({
            status:"success",
            data:{
                restaurants:restaurants.rows[0],
                reviews:reviews.rows
            }
        })
    } catch (error) {
        console.log(error);
    } 
});

// create a restaurant
app.post("/api/v1/restaurants",async (req,res)=>{
    // we are able to access the body only because we have used the middle ware express,json() in line 21
    try {
        console.log(req.body);
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1,$2,$3) RETURNING *",[req.body.name,req.body.location,req.body.price_range])
        console.log(results.rows[0]);
        res.status(201).json({
            status: "success",
            data :{
                restaurants:results.rows[0],
            }
        });
    } catch (error) {
        console.log(error);
    }
    
});

// update a restaurant by id 
app.put("/api/v1/restaurants/:id",async (req,res)=>{
    console.log(req.params);
    console.log(req.body);
    try {
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",[req.body.name,req.body.location,req.body.price_range,req.params.id])
        console.log(results.rows[0])
        res.status(200).json({
            status: "success",
            data :{
                restaurants:results.rows[0],
            }
        });
    } catch (error) {
        console.log(error);
    }
    
});

// delete a restaurant by id 
app.delete("/api/v1/restaurants/:id",async (req,res)=>{
    console.log(req.params);
    try {
        const results = await db.query("DELETE FROM restaurants WHERE id = $1 returning *",[req.params.id]);
        console.log(results.rows[0]);
        res.status(204).json({
            status : "success",
            data :{
                restaurants:results.rows[0],
            }
        });
    } catch (error) {
        console.log(error);
    }
});

// add a review to a restaurant based on id
app.post("/api/v1/restaurants/:id/addreview", async (req,res)=>{
    try {
        const results = await db.query("INSERT INTO reviews (restaurant_id,name,review,rating) values($1,$2,$3,$4) returning *",[req.params.id,req.body.name,req.body.review,req.body.rating]);
        console.log(results.rows[0]);
        res.status(204).json({
            status : "success",
            data :{
                reviews:results.rows[0],
            }
        });
    } catch (error) {
        console.log(error);
    }
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
});