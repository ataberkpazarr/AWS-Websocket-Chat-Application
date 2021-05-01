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


WebSocket_PoC_ConnectRoute_Phase1.js and WebSocket_PoC_DisconnectRoute_Phase1.js are the routes that will be used as connect and disconnect lambdas, so you can copy them from this repo. They are coded with node.js 14.x. Also you needed to attach the role that we created, while creating these lambdas as below.


![image](https://user-images.githubusercontent.com/55497058/116787416-e1211480-aa71-11eb-82b9-8eaac1f4c595.png)

After creating both disconnect and connect routes, now we are ready to create the Websocket API Gateway.

Go to the API Gateway console, press Create API button, select WebSocket API from there and press build.


The creation steps as following:

![image](https://user-images.githubusercontent.com/55497058/116787996-4f1b0b00-aa75-11eb-866a-cdffa84459e0.png)
![image](https://user-images.githubusercontent.com/55497058/116788005-5510ec00-aa75-11eb-87f9-089a6ec27ee8.png)
![image](https://user-images.githubusercontent.com/55497058/116788009-58a47300-aa75-11eb-94eb-4263ca48c13a.png)
![image](https://user-images.githubusercontent.com/55497058/116788013-5b9f6380-aa75-11eb-99c6-944e186eca76.png)
![image](https://user-images.githubusercontent.com/55497058/116788064-986b5a80-aa75-11eb-8611-01952b229af4.png)
![image](https://user-images.githubusercontent.com/55497058/116788052-8db0c580-aa75-11eb-81ce-c38a5e48d250.png)


After these steps, press Create and Deploy. Then it will be created but not deployed which means we needed to deploy it. So, we should deploy API as below.
![image](https://user-images.githubusercontent.com/55497058/116788096-bf299100-aa75-11eb-99fe-468de6c8c966.png)

Then we will se URL's for invoking our API. Let's try to connect and check if our connection id goes to the DynamoDB.

We will use wscat for connection and you can use it after simple installation.

As you can see below, we succesfully connected to the API and the connection id went to the DynamoDB, in the our active-connections table, under the items. Whenever you cut the connection, you will see that the connection id will be erased from active-connections.

![image](https://user-images.githubusercontent.com/55497058/116788133-0152d280-aa76-11eb-9dc4-23f7844ed9c5.png)
![image](https://user-images.githubusercontent.com/55497058/116788172-32cb9e00-aa76-11eb-81b3-195999e39ba6.png)












