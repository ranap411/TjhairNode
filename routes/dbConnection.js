const mongoClient = require('mongodb').MongoClient

const mongoDbUrl = 'mongodb://prashant:ranap411@ds147181.mlab.com:47181/plus91labs';

let mongodb;

function connect(callback){
    mongoClient.connect(mongoDbUrl, (err, db) => {
        mongodb = db;
        callback();
    });
}
function get(){
    return mongodb;
}

function close(){
    mongodb.close();
}

module.exports = {
    connect,
    get,
    close
};