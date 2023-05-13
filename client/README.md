# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Step by Step How I have created a full stack web application 

****************************CLONE  OF  YELP***************************************** 

_________________________________Start_______________________________________
create a folder name it based on the app your building.

create two sub folders, name one as Client and the other as Server. Client folder is going to contain all the files related to the front-end and on the other side the server folder is going to contain all files and logic related to the back-end.

what I think are the requirements to  build  a P_E_R_N Full stack application from scratch

_________________________________Back-End_______________________________________

Database
    -Understanding of PostGresSQL DataBase, should be able to
        connect to Database------- (\c)
        list out all Databases---------(\l)
        list out all Tables in the connected DataBase--------(\d)
        get details about a specific Table in the connected Database---------(\d <Table_Name>)
    -Understanding of SQL Language, should be able to perform Queries from a selected Database using
        Creating Database commands
        Creating Table commands
            Data types
            Primary key
            Constraints
            Foregn key
            Checks
        Data retreval commands
        Data deletion commands
        Data Insertion commands
        Aggregator function commands
        Join commands
Server
    Good understanding of the following technologies
        Node.js
        Node Package Manager 
        Some npm commands
            npm -v (get to know the version of the node you are currently using)
            npm install <Package_name> (for installation of a external package)
            npm install <Package_name> -g (for installation of a external package globally)
            npm list (get all packages installed and the corresponding versions)
            npm list -g (get all packages installed globally and the corresponding versions)
            npm -v <package_name> (get version of a particular package)
            npm init (to instantiate a project)
            npm init -y (to instantiate a project with default promts)
        express
        Pg
        Nodemon
        MiddleWares
            CORS
            JSON
        JavaScript
        Rest API methods
            GET
            PUT
            POST
            DELETE
        PostMan appliction for testing the API calls
        status codes

STEP BY STEP INSTRUCTIONs FOR BUILDING A BACK-END SERVER 

    After creating a sub-folder called server, navigate into the following folder

    instanciate a new project, this will create a package.json file

    install express, pg, nodemon, dotenv, cors

    create a env file, this file contains all environment parameters

    create a db folder in the server folder and create a index.js file
         import pg as pool 
         instanciate a new instance of pool
         export pool.query() function as some alias, I have used query

    create a server.js file
        import all the required pacakes like, cors, dotenv, express
        import the db file as db so that u can use the db.query function to connect with data base
        instanciate express app
        write logic for various Api calls using 
            .put for altering the data
            .get for fetching data
            .delete for deleting data
            .post for creating new entries in the data
            this is called as REST API
        use middle wares like express, cors if required
        using .listen function listen to a particular port and log some meaning full comments in the method. so, that the user can know that the server is up and running on some port.
    
    After creating server.js file do the following changes in package.json file 
        "scripts": {
                        "start": "nodemon server.js"
                    }
        doing this, you can run comand "npm start" instead of "nodemon server.js" 

    use Potsman application for testing the api calls  

Thats it for the Backend.

_________________________________Front-End_______________________________________

STEP BY STEP INSTRUCTIONs FOR BUILDING A FRONT-END in REACT

    now navigate back to our client folder 

    run  the command "npx create-react-app .", this command will install react react-scripts react-router-dom react-dom and creates a static react app in the client folder

    lets discuss the Api part of front end

    we use axios for this, install the axios package using npm i axios 

    create a new axios instance using axios.create() command pass a object with attibute as base url and this base url will be used for all api call by default

    axios.create({
        baseURL:"some base url which u use often"
    })

    use this to make calls in the react app











