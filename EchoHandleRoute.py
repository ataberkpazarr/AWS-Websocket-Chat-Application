import json
import boto3 
def lambda_handler(event, context):
    # TODO implement
    dynamo_db = boto3.resource('dynamodb',region_name='us-east-2')
    
    
    table = dynamo_db.Table('monitoring-connections')
    
    response = table.scan()
    data = response['Items']

    
    
    
    URL = "https://" + event["requestContext"]["domainName"] + "/" + event["requestContext"]["stage"]
    Client = boto3.client('apigatewaymanagementapi',endpoint_url=URL)

    aa=event['body']
    kk= json.loads(aa)
    

    for i in range (0,len(data)):
     conn_id = str(data[i]["connectionid"])
     Client.post_to_connection(ConnectionId=conn_id,Data=kk['data'])
    

