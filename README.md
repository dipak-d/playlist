# Playlists
**In this project have 3 diffrent module codes as below**
  * Data Processing
  * Backend API
  * Frontend
 
 **Data Processing**
  - **data-processing** please refer this folder for data processing code
  - Playlist JSON file stored on S3 bucket
  - Extracted S3 JSON data in Lamda
  - Processed data by using python language
  - Stored processed data into DynamoDB ( NoSQL)
  - Pandas dataframe is used to to format the data
  
 **Backend API**
  - Followed microservices architecture for API development
  - Created two lambda functions to serve the purpose as below:
  - Get all the playlist and search records by title, used **playlist-get-all-data** lambda function
  - Update the star ratings by id and title, used **playlist-update-rating** lambda function 
    
 **Frontend**
  - Please refer **UI** folder for the angular code and just displayed the list 
