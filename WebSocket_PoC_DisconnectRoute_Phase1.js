const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});

exports.handler = (event, context, callback) => {   
    const connectionId = event.requestContext.connectionId;    
    deleteConnectionId(connectionId).then(() => {    
        callback(null, {        statusCode: 200,     
        })    
        
    })
        ;}


function deleteConnectionId(connectionId) {    
    return ddb.delete({        
        TableName: 'active-connections',      
        Key: {            connectionid : connectionId,        },  
    }).promise();}
