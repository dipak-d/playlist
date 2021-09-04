const { getAllPlaylist } = require('model');

exports.handler = async (event) => {
    console.log("Test Data");
    console.log(event)
    const title = event.title ? event.title : ''
    const data = await getAllPlaylist('playlist', title);
    console.log(data);
    const response = {
        statusCode: 200,

        body: {
            'message': 'All playlist data',
            'data': data
        },
    };
    return response;
};
