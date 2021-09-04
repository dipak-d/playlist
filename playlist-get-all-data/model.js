const AWS = require('aws-sdk');
AWS.config.update({
  region: 'ap-south-1'
});
const documentClient = new AWS.DynamoDB.DocumentClient();

const getAllPlaylist = async (tableName, title='') => {
    const params = {
        TableName: tableName
    };
    let obj = {}
    if(title.trim().length > 0){
         obj = {
                FilterExpression: "#title = :title_name",
                ExpressionAttributeNames: {
                    "#title": "title",
                },
                ExpressionAttributeValues: { ':title_name': title.trim().toString() }
        };
    }
    const scanResults = [];
    let items = [];
    do{
        items =  await documentClient.scan({...params, ...obj}).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey  = items.LastEvaluatedKey;
    }while(typeof items.LastEvaluatedKey !== "undefined");
    
    console.log("Data", JSON.stringify(scanResults));
    return scanResults;
};

module.exports = { 
    getAllPlaylist
}