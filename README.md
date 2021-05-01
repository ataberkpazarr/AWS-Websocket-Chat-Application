# AWS-Websocket-Chat-Application

Developed an web-socket real time chat application architecture with AWS Lambda, Websocket API Gateway and DynamoDB. 

The main architecture is as following:

![resim](https://user-images.githubusercontent.com/55497058/116785749-e26b3500-aaa3-11eb-80d4-177339c375ad.png)

![resim](https://user-images.githubusercontent.com/55497058/116785780-03cc2100-aaa4-11eb-884c-f1e994df9fbe.png)


Here are the steps:

Firstly, we are needed to create DynamoDB table for monitoring the connections. Go to the DynamoDB Console and create DynamoDB table as below.

![image](https://user-images.githubusercontent.com/55497058/116786542-33ac0200-aa6d-11eb-9f31-d826a3960adb.png)

As it seen in the main architecture, we will have 3 lambda routes behind the WebSocket API Gateway and those routes will be able to write and read from DynamoDB, thus we are needed to create IAM role which let write/read operations on DynamoDB.

Go to the IAM console and select AWS service as "Select type of trusted entity", after this selection Choose Lambda from the "Choose a use case".
Press next and in the new page, we will attach the policies that determines scope of the lambda which we will attached this role.
Choose "AmazonAPIGatewayInvokeFullAccess", "AWSLambdaBasicExecutionRole " and  "AmazonDynamoDBFullAccess", from here. It should seen as below, then press create the role.

![image](https://user-images.githubusercontent.com/55497058/116786617-9a312000-aa6d-11eb-80a1-f51444108d63.png)



Now we are ready for creating the routes that will be used in Websocket API gateway.Go to Lambda panel, Create functions for connect and disonnect routes.


https://github.com/ataberkpazarr/AWS-Websocket-Chat-Application/blob/dfd0f704398f536b3a7be0fb6c4e115bb86a1145/WebSocket_PoC_ConnectRoute_Phase1.js

 
