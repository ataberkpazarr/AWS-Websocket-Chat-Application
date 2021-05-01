const ddb = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'}); // it should be specified with respected to your region 



exports.handler = (event, context, callback) => {    
    const connectionId = event.requestContext.connectionId;    
    addConnectionId(connectionId).then(() => {    
        callback(
            null, {        statusCode: 200,        })    
        
    })
        ;}
        
function addConnectionId(connectionId) {   
    
    return ddb.put({        TableName: 'active-connections',       //table name also should be specified 
    Item: { connectionid : connectionId  },    
        
    }).promise()
    ;}
