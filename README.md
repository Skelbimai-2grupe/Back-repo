
# Skelbimai Web App

## Overview

The Skelbimai App is a platform for posting and managing advertisements. Users can create, view, and like ads. Skelbimai app built using Node.js and Express. It provides a RESTful API for the frontend to interact with.

## Features

- User authentication and authorization
- Create, read, update, and delete advertisements
- View all advertisements
- Like and unlike advertisements
- View user's own advertisements
- Mark advertisements as favorites

## Tech Stack

- **Node.js**: JavaScript runtime environment
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **JWT**: JSON Web Tokens for authentication
- **dotenv**: Environment variable management

## Start backend server


1. **Install dependencies:**

   npm install
  
  
2. **Run the server:**
    
    npm run server

    The server will start on the port specified in the `.env` file (default is 5000).


 ## Contributors
- KESTUTIS GIRDZIUNAS
- KAROLIS LAPIENIS
- LAURYNAS JOKŠAS
- LAURYNAS ŠAPNAGIS
- TAUTVYDAS KREIVYS

## Issues and Bug Reporting

   If you encounter any issues or bugs, please report to our gmail:  skelbimai.reports@gmail.com

   ## Additional Resources



## POSTMAN TESTING CRUD GUIDE :

1. # ADS

# CREATE AD

Endpoint: http://localhost:5000/ads  
Method: POST  
Description: Creates a new advertisement  
Request Body:

{
  "title": "Example Ad",
  "description": "This is an example ad",
  "price": 100,
  "category": "Example Category"
}


# GET ALL ADS

Endpoint: http://localhost:5000/ads  
Method: GET  
Description: Retrieves all advertisements

# UPDATE AD BY ID

Endpoint: http://localhost:5000/ads/{id}  
Method: PUT  
Description: Updates an existing advertisement  
Request Body:

{
  "title": "Updated Ad",
  "description": "This is an updated ad",
  "price": 150,
  "category": "Updated Category"
}

# DELETE AD BY ID

Endpoint: http://localhost:5000/ads/{id}  
Method: DELETE  
Description: Deletes an existing advertisement

2. # CATEGORIES

# CREATE CATEGORY

Endpoint: http://localhost:5000/categories  
Method: POST  
Description: Creates a new category  
Request Body:

{
  "name": "Example Category"
}


# GET ALL CATEGORIES

Endpoint: http://localhost:5000/categories  
Method: GET  
Description: Retrieves all categories

# UPDATE CATEGORY BY ID

Endpoint: http://localhost:5000/categories/{id}  
Method: PUT  
Description: Updates an existing category  
Request Body:

{
  "name": "Updated Category"
}

# DELETE CATEGORY BY ID

Endpoint: http://localhost:5000/categories/{id}  
Method: DELETE  
Description: Deletes an existing category


3. # Comments


# CREATE COMMENT

Endpoint: http://localhost:5000/comments  
Method: POST  
Description: Creates a new comment  
Request Body:

{
  "adId": "Ad ID",
  "text": "This is a comment"
}

# GET ALL COMMENTS

Endpoint: http://localhost:5000/comments  
Method: GET  
Description: Retrieves all comments

# UPDATE COMMENTS BY ID

Endpoint: http://localhost:5000/comments/{id}  
Method: PUT  
Description: Updates an existing comment  
Request Body:

{
  "text": "Updated comment"
}

# DELETE COMMENT BY ID

Endpoint: http://localhost:5000/comments/{id}  
Method: DELETE  
Description: Deletes an existing comment

4. # LIKES


# LIKE AN AD

Endpoint: http://localhost:5000/ads/{id}/like  
Method: POST  
Description: Likes an advertisement

# UNLIKE AN AD

Endpoint: http://localhost:5000/ads/{id}/unlike  
Method: POST  
Description: Unlikes an advertisement

5.  # USERS


# CREATE USER

Endpoint: http://localhost:5000/users  
Method: POST  
Description: Creates a new user  
Request Body:

{
  "username": "exampleuser",
  "password": "examplepassword",
  "email": "example@example.com"
}

# GET ALL USERS

Endpoint: http://localhost:5000/users  
Method: GET  
Description: Retrieves all users

# UPDATE USER BY ID

Endpoint: http://localhost:5000/users/{id}  
Method: PUT  
Description: Updates an existing user  
Request Body:

{
  "username": "updateduser",
  "email": "updated@example.com"
}

# DELETE USER BY ID

Endpoint: http://localhost:5000/users/{id}  
Method: DELETE  
Description: Deletes an existing user

This guide should help you get started with launching the project and testing the CRUD operations using Postman.


# LOGINS FOR TESTING 

# PAPRASTAS: defaultuser@gmail.com / default123
# ADMINAS: adminuser@gmail.com / admin123



#### Trello:
https://trello.com/invite/b/qU8dSP94/ATTIc38c40d6f5672524d3c634d09afa0b2a64A1BE4E/skelbimai-app 

#### User story flowchart:
https://lucid.app/lucidchart/38e32648-0336-48fe-95b8-4e7340d20782/edit?invitationId=inv_984ec529-6d0f-405d-900b-e77c78c352bd&page=0_0

#### DB relations:
https://drive.google.com/file/d/1glAUk_dBabOVElY2eu7GHzSAlLGR3Sox/view

#### Skaidres:
https://docs.google.com/presentation/d/1Ya6_1yJMuhyOlH1dD8hIWSzIRVfM5SWKwfjXnk8hwGY/edit#slide=id.g202a350378e_0_0

#### Figma:
https://www.figma.com/design/Z3cjZzQYfKxmZt9Paq2F22/Untitled?node-id=0-1

# Our discord: https://discord.gg/Qb8gAFem
