import json
import boto3

def download_file_s3():
    try:
        bucket='<S3 bucket Name>'
        key='playlist.json'
        objectName='data/playlist.json'
        s3 = boto3.resource('s3')
        s3.Bucket(bucket).download_file(objectName, '/tmp/'+key)

    except botocore.exceptions.ClientError as e:
        print(e)
        if e.response['Error']['Code'] == "404":
            print("The object does not exist.")
        else:
            raise