# Get Events
* URL  
*api/Events/*
* Method  
*get*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200*
  * Result:

  ```json
  [{
    "id": 80,
    "name": "This is an Event",
    "description": "this is the description of the event",
    "latlon": {
        "x": 39.30539976842445,
        "y": -8.863769564777614
    },
    "image": null,
    "host": 1,
    "category": 1,
    "startDate": "2020-01-22T12:00:00.000Z",
    "endDate": "2020-01-31T12:00:00.000Z",
    "status": "active"
  }]
  ```
 
  
# Get Event Categories
* URL  
*api/Events/Categories*
* Method  
*get*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200*
  * Result:
```json
  [{
    "id": 1,
    "name": "Jogging",
    "image": "https://static01.nyt.com/images/2014/01/10/health/10well_askwell/10well_askwell-tmagArticle.jpg",
    "description": "Jogging is a form of trotting or running at a slow or leisurely pace."
  }, {
    "id": 2,
    "name": "Photography",
    "image": "https://d36iur3orme9ke.cloudfront.net/wp-content/uploads/2016/06/blog_top-image_Open-Source-Photography.jpg",
    "description": "Photography is the art, application and practice of creating durable images by recording light or other           electromagnetic radiation."
  }, {
    "id": 3,
    "name": "Cooking",
    "image": "https://assets.epicurious.com/photos/5dc6dbfbd482f10008d4fad9/4:3/w_4013,h_3010,c_limit/NewJoyCooking_HERO_110519_6023.jpg",
    "description": "Cooking or cookery is the art, technology, science and craft of preparing food for consumption."
  }, {
    "id": 4,
    "name": "Gardening",
    "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gardening-1521662873.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*",
    "description": "Gardening is the practice of growing and cultivating plants as part of horticulture."
  }, {
    "id": 5,
    "name": "Drawing",
    "image": "https://xo3d.co.uk/wp-content/uploads/2019/11/Colour-Palette.jpg",
    "description": "Drawing is a form of visual art in which a person uses various drawing instruments to mark paper or another two-dimensional medium."
  }, {
    "id": 6,
    "name": "Knitting",
    "image": "https://static.wixstatic.com/media/baafc9_775d60d666fe4395820506d79d1b9e6d~mv2.jpg",
    "description": "Knitting is a method by which yarn is manipulated to create a textile or fabric; it is used in many types of garments."
  }]
 ```  
# Create Events
* URL  
*api/Events/Create*
* Method  
*post*
* Data Params    
*eventCategory = [string]  
startDate = [string]  
endDate = [string]  
eventName = [string]  
eventDescription = [string]  
eventLat = [string]  
eventLon = [string]  
host = [string]  
startTime = [string]  
endTime = [string]*  
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200*  
  
# User Joins Events
* URL  
*api/Events/Group/Join*
* Method    
*post*
* Data Params  
*idEvent = [string]  
idUser = [string]*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200*  
  
# Delete Events
* URL  
*api/Events/Delete*
* Method  
*delete*
* Data Params  
*idEvent = [string]*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200*  
  
# Get Events by User
* URL  
*api/Events/Group/:userID*
* Method  
*get*
* URL Params  
*idUser = [string]*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200*  
  * Result: 
  ```json
  [{
    "idRelation": 75,
    "idUsers": 1,
    "idEvent": 80
  }]
  ```
# Get Selected Event
* URL  
*api/Events/:eventID*
* Method  
*get*
* URL Params  
*eventID = [string]*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200*  
  * Result: 
  ```json
  [{
    "id": 80,
    "name": "This is an Event",
    "description": "this is the description of the event",
    "latlon": {
        "x": 39.30539976842445,
        "y": -8.863769564777614
    },
    "image": null,
    "host": 1,
    "category": 1,
    "startDate": "2020-01-22T12:00:00.000Z",
    "endDate": "2020-01-31T12:00:00.000Z",
    "status": "active"
  }]
  ```
  
# Get Selected Event Location
* URL  
*api/Events/:eventId/Location*
* Method  
*get*
* URL Params  
*eventId = [string]*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200*  
  * Result: 
  ```json
  [{
    "lat": 39.30539976842445,
    "lon": -8.863769564777614
  }]
  ```
  
# Create a User
* URL  
*api/Users/CreateUser*
* Method  
*post*
* Data Params  
*name = [string]  
mail = [string]  
password = [string]*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200*  
  
# Autenticate User
* URL  
*api/Users/Login*
* Method  
*post*
* Data Params  
*mail = [string]  
password = [string]*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200*  
  
# Get User Preferences
* URL  
*api/Users/:userID/Preferences*
* Method  
*get*
* URL Params  
*userID = [string]*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200*  
  * Result: 
  ```json
  [{
    "idCat": 1,
    "idUser": 1
  }, {
    "idCat": 3,
    "idUser": 1
  }, {
    "idCat": 4,
    "idUser": 1
  }, {
    "idCat": 5,
    "idUser": 1
  }, {
    "idCat": 6,
    "idUser": 1
  }]
  ```
 
# Updates User Preferences
* URL  
*api/Users/User/Preferences*
* Method  
*post*
* Data Params  
*idUser = [string]  
idCat = [string]*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200*  
  
# Get Selected User
* URL  
*api/Users/:userID*
* Method  
*get*
* URL Params  
*userID = [string]*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200*  
  * Result: 
  ```json
  [{
    "name": "Manuel B.",
    "latlon": {
        "x": 38.8417686,
        "y": -9.428132999999999
    },
    "mail": "admin@GroupUp"
   ]}
  ```
  
# Updates Users Location
* URL  
*api/Users/User/latlon*
* Method  
*put*
* Data Params  
*lat = [string]  
lon = [string]  
idUser = [string]*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200*  
  
 # Links User to Discord
* URL  
*api/Users/User/Discord*
* Method  
*post*
* Data Params  
*discId = [string]  
userId = [string]*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200* 
  
 # Create a Discord Channel
* URL  
*api/Discord/CreateChannel*
* Method  
*post*
* Data Params  
*eventName = [string]*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200* 
  
# Give Roles to Users
* URL  
*api/Discord/GiveRoles*
* Method  
*post*
* Data Params  
*discId = [string]  
joinedEventsNames = [string]*
* Error Response
  * Code: *500*
  * Error in a database query
* Success Result
  * Code: *200* 
  

  
  
 
 
