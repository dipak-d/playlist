const AWS = require('aws-sdk');
AWS.config.update({
  region: 'ap-south-1'
});
const documentClient = new AWS.DynamoDB.DocumentClient();

const updatePlaylist = async (tableName, data={}) => {
    try{
        const rating = data && data.star_rating ? data.star_rating : 0;
        const params = {
            TableName:tableName,
            Key:{
                "id": data.id.toString(),
                "title": data.title.toString()
            },
            UpdateExpression: "set star_rating = :r",
            ExpressionAttributeValues:{
                ":r": parseInt(data.star_rating)
            },
            ReturnValues:"UPDATED_NEW"
        };
        const result =await documentClient.update(params).promise();
        return result;
    }
    catch(error) {
        console.log("error: ", error)
    }
};
const getPlaylist = async (tableName, data={}) => {
    try{
        var params = {
            TableName : tableName,
            KeyConditionExpression: "#id = :idValue and title =:title",
            ExpressionAttributeNames:{
                "#id": "id"
            },
            ExpressionAttributeValues: {
                ":idValue": data.id.toString(),
                ":title": data.title.toString()
            }
        }
        const result =await documentClient.query(params).promise();
        return result;
    }
    catch(error) {
        console.log("error: ", error)
    }
};
module.exports = { 
    updatePlaylist,
    getPlaylist
}