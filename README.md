# AWS-Websocket-Chat-Application

Developed an web-socket real time chat application architecture with AWS Lambda, Websocket API Gateway and DynamoDB. 

The main architecture is as following:

![resim](https://user-images.githubusercontent.com/55497058/116785749-e26b3500-aaa3-11eb-80d4-177339c375ad.png)

![resim](https://user-images.githubusercontent.com/55497058/116785780-03cc2100-aaa4-11eb-884c-f1e994df9fbe.png)


Here are the steps:

Firstly, we are needed to create DynamoDB table for monitoring the connections. Go to the DynamoDB Console and create DynamoDB table as below.

![image](https://user-images.githubusercontent.com/55497058/116786487-e62f9500-aa6c-11eb-8cad-73fc96479940.png)

As it seen in the main architecture, we will have 3 lambda routes behind the WebSocket API Gateway and those routes will be able to write and read from DynamoDB, thus we are needed to create IAM role which let write/read operations on DynamoDB.

Go to the IAM console and select AWS service as "Select type of trusted entity", after this selection Choose Lambda from the "Choose a use case".
Press next and in the new page, we will attach the policies that determines scope of the lambda which we will attached this role.
Choose "AmazonAPIGatewayInvokeFullAccess", "AWSLambdaBasicExecutionRole " and  "AmazonDynamoDBFullAccess", from here. It should seen as below, then press create the role.

![image](https://user-images.githubusercontent.com/55497058/116786468-c1d3b880-aa6c-11eb-815f-5c2f01c5e341.png)

Now we are ready for creating the routes that will be used in Websocket API gateway.

 
