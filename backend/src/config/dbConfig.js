const mongoose = require('mongoose');
//const { MongoClient, ServerApiVersion } = require("mongodb");
//const client = new MongoClient(uri);
const dbConfig='mongodb+srv://marcelosuarez:Qel2fP0gEbh2xA1F@cluster0.mlvntk9.mongodb.net/anotations?retryWrites=true&w=majority';

//const client = new MongoClient(dbConfig,  {
  //  serverApi: {
    //    version: ServerApiVersion.v1,
      //  strict: true,
        //deprecationErrors: true,
    //}
//}
//);
//const database = client.dbConfig("anotations");
//const collection = database.collection("annotations");

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = connection;