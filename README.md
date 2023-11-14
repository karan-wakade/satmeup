# THE SATMEUP APP

## About the project

The Satmeup app was created using the [React Library](https://react.dev/). It is a single page web application using client side rendering. The backend was created using [Node](https://nodejs.org/en/) and [Express](https://expressjs.com/).

## Table of Contents

- [Deployment](#Deployment)
  - [App deployed on render](#App-launched-on-render)
  - [Backend repository](#Backend-App-repository)
  - [CRON server](#CRON-used-for-keeping-express-server-active)
- [Project Structure](#Project-Structure)
  - [Frontend](#Front-end)
  - [Backend](#Back-end)
- [Folder Structure](#folder-structure)
- [Node modules](#Node-modules)
- [Available Scripts](#available-scripts)

## Deployment

The front-end and back-end are seperateley hosted on [Render](https://render.com/). The Render back end server goes to a sleep state after 15 minutes of inactivity, making the first load on web page slow. A CORN server was used to fetch dummy data from express server every 10 minutes.

API's used: [N2YO](https://www.n2yo.com/)

### App launched on render

https://satmeup.onrender.com/

### Backend App repository

https://github.com/guywithashampoo/satmeupbackend

### CRON used for keeping express server active

https://cron-job.com

## Project Structure

### Front end

React used to get user input and generate url using queries to fetch data from express server.

### Back end

Node-Express used to make server to generate url to fetch data from API. Data sent back to front end as json object. CORS enabled for front end to send GET request.

## Folder Structure

After setting up environment your folder structure should look like this:

```
├───build
│   └───static
│       ├───css
│       └───js
├───node_modules
├───public
└───src
    │   App.css
    │   App.js
    │   App.test.js
    │   index.css
    │   index.js
    │   logo.svg
    │   reportWebVitals.js
    │   setupTests.js
    │
    └───components
        │   categories.js
        │   fetchedData.js
        │   getApi.js
        │   getUserCoords.js
        │   loading.js
        │   satellites.js
        │
        ├───getpasses
        │       getPasses.js
        │       getPassesUrlGen.js
        │       satPassesRender.js
        │
        ├───getsatcoord
        │       satCoordUrlGen.js
        │       satLocation.js
        │       satLocationRender.js
        │
        ├───gettle
        │       AboutSat.js
        │       aboutSatUrlGen.js
        │       getTleRender.js
        │
        └───whatsup
                Above.js
                aboveRender.js
                aboveUrlGen.js
                fetchedApiList.js
                getApiList.js
```

## Node modules

To install all node modules use command

### `npm install`

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
