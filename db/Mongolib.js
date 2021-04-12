const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = process.env.mongourl;

const dbName = 'taller9';

const client = new MongoClient(url, { useUnifiedTopology: true });

const getDatabase = (callback) => {
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);

        callback(db, client);
    });
}

const findDocuments = function (db, callback) {
    const collection = db.collection('offers');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
}

const insertDocument = function (db, adding, callback) {
    db.collection("offers").insertOne(adding, function (err, result) {
      assert.equal(null, err);
      console.log("Item inserted");
      callback(adding);
    });
  };

exports.getDatabase = getDatabase;
exports.findDocuments = findDocuments;
exports.insertDocument = insertDocument