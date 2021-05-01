# AWS-Websocket-Chat-Application

Developed an web-socket real time chat application architecture with AWS Lambda, Websocket API Gateway and DynamoDB. 

The main architecture is as following:

![resim](https://user-images.githubusercontent.com/55497058/116785749-e26b3500-aaa3-11eb-80d4-177339c375ad.png)

![resim](https://user-images.githubusercontent.com/55497058/116785780-03cc2100-aaa4-11eb-884c-f1e994df9fbe.png)


Here are the steps:

Firstly, we are needed to create DynamoDB table for monitoring the connections. Go to the DynamoDB Console and create DynamoDB table as below.

file:///home/ata/Pictures/Screenshot%20from%202021-05-01%2010-43-03.png![image](https://user-images.githubusercontent.com/55497058/116785921-175a9600-aa6a-11eb-8dd8-8e78b84ccd73.png)

As it seen in the main architecture, we will have 3 lambda routes behind the WebSocket API Gateway and those routes will be able to write and read from DynamoDB, thus we are needed to create IAM role which let write/read operations on DynamoDB.

Go to the IAM console and select AWS service as "Select type of trusted entity", after this selection Choose Lambda from the "Choose a use case".
Press next and in the new page, we will attach the policies that determines scope of the lambda which we will attached this role.
Choose "AmazonAPIGatewayInvokeFullAccess", "AWSLambdaBasicExecutionRole " and  "AmazonDynamoDBFullAccess", from here. It should seen as below, then press create the role.

![image](https://user-images.githubusercontent.com/55497058/116786295-c6e43800-aa6b-11eb-90e0-59fc8178a574.png)

Now we are ready for creating the routes that will be used in Websocket API gateway.

 
