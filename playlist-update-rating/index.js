const { updatePlaylist, getPlaylist } = require('model');

exports.handler = async (event) => {
    const requestData = event['body-json'];
    if(!(requestData.id && requestData.title && requestData.star_rating)){
        const response = {
            statusCode: 404,
            body: {
                'message': 'Please provide mandotory fields id,title and star_rating',
                'data': []
            },
        };
        return response;
    }
    const result = await getPlaylist('playlist', requestData);
    if(result['Items'] && result['Items'].length === 0){
        const response = {
            statusCode: 404,
            body: {
                'message': 'Record not found.',
                'data': []
            },
        };
        return response;
    }
    
    const data = await updatePlaylist('playlist', requestData);
    const response = {
        statusCode: 200,

        body: {
            'message': 'Playlist data updated',
            'data': data
        },
    };
    return response;
};
