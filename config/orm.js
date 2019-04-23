var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        connection.query("SELECT * FROM " + table, function (err, result) {
            if (err) throw error;
            cb(result);
        })
    },
    insertOne: function (table, name, cb) {
        // connection.query("INSERT INTO " + table + " (burger_name) VALUES (" + name +")");
        connection.query('INSERT INTO ' + table + ' (burger_name) VALUES ("'+ name +'")', function (err, result) {
            if (err) throw error;
            cb(result);
        });
    },
    updateOne: function (table, id, cb) {
        connection.query("UPDATE " + table + " SET devoured = true WhERE id = " + id, function (err, result) {
            if (err) throw error;
            cb(result);
        });
    }
};

module.exports = orm;