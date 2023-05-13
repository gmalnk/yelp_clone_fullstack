import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./routes/Home"
import RestaurantDetails from "./routes/RestaurantDetails"
import UpdateRestaurant from "./routes/UpdateRestaurant"
import { RestaurantsContextProvider} from "./Context/RestaurantsContext"


const App = () =>{
    return (
            <RestaurantsContextProvider>
                <div  className="container"> 
                    <Router>
                        <Routes>
                            <Route exact path="/" Component={Home}/>
                            <Route exact path="/restaurants/:id" Component={RestaurantDetails}/>
                            <Route exact path="/restaurants/:id/update" Component={UpdateRestaurant}/>
                        </Routes>
                    </Router>
                </div>
            </RestaurantsContextProvider>)
    
};

export default App;