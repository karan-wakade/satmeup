# THE SATMEUP APP

## App launched on render:

https://satmeup.onrender.com/

## Backend App repository:

https://github.com/guywithashampoo/satmeupbackend

## CRON used for keeping express server active:

https://cron-job.com

## Project Structure:

### Front end:

React used to get user input and generate url using queries to fetch data from express server.

### Back end:

Node-Express used to make server to generate url to fetch data from API. Data sent back to front end as json object. CORS enabled for front end to send GET request.

### Deployment:

Render used to host front end and back end. Render back end server goes to sleep state after 15 minutes of inactivity making first load on web page slow. CORN used to fetch dummy data from express server every 10 minutes.

This project was created using node and react,
API's used: n2yo
