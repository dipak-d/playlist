import json
import boto3
import botocore
from model import load_data
from services import download_file_s3
import pandas as pd

def lambda_handler(event, context):
    try:
        #Download data file from S3
        download_file_s3()

        #Read downloaded json data from lambda temp
        df = pd.read_json('/tmp/playlist.json')

        for index in range(len(df)):
            #extract row from df
        	record = df.iloc[index]
        	record['star_rating'] = 0
            #Insert records into DynamoDB
        	load_data(record)
        return {
            'statusCode': 200,
            'body': json.dumps('Data exported to dynamodb!')
        }
    except Exception as e:
        print("Found some errors", e)
