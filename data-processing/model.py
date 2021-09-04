import boto3
client = boto3.client('dynamodb')

def load_data(playlist, dynamodb=None):
    data = {
        "id": {"S": playlist['id']},
        "title": {"S": playlist['title']},
        "danceability": {"S": str(playlist['danceability'])},
        "energy": {"S": str(playlist['energy'])},
        "key": {"S": str(playlist['key'])},
        "loudness": {"S": str(playlist['loudness'])},
        "mode": {"S": str(playlist['mode'])},
        "acousticness": {"S": str(playlist['acousticness'])},
        "instrumentalness": {"S": str(playlist['instrumentalness'])},
        "liveness": {"S": str(playlist['liveness'])},
        "valence": {"S": str(playlist['valence'])},
        "tempo": {"S": str(playlist['tempo'])},
        "duration_ms": {"S": str(playlist['duration_ms'])},
        "time_signature": {"S": str(playlist['time_signature'])},
        "num_bars": {"S": str(playlist['num_bars'])},
        "num_sections": {"S": str(playlist['num_sections'])},
        "num_segments": {"S": str(playlist['num_segments'])},
        "class": {"S": str(playlist['class'])},
        "star_rating": {"N": str(playlist['star_rating'])}
    }
    client.put_item(TableName='playlist', Item=data)
    return True
