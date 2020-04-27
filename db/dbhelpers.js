// complete and fix the dbhelpers
const db = require('./index.js')

module.exports = {
  getProductsHelper: function(callback){
  let queryStr= 'SELECT * FROM products;'
  db.query(queryStr, function(err, results){
   callback(err, results);
 })
},

  postProductsHelper: function(product, callback){
    var {item, min_cost, curr_bid, ends_in, image} = product;
    var queryStr = `INSERT INTO products(item, min_cost, curr_bid, ends_in, image) VALUES ("${item}", ${min_cost}, ${curr_bid}, ${ends_in}, "${image}");`;

    db.query(queryStr, function(err, results){
      callback(err, results);
    });
},

  updateProductHelper: function(product, callback){
   var {id, item, min_cost, curr_bid, ends_in, image} = product;
   var queryStr= `UPDATE products SET item = "${item}", min_cost = ${min_cost}, curr_bid=${curr_bid}, ends_in = ${ends_in}, image = "${image}" WHERE id=${id};`;
   db.query(queryStr, function(err, results){
     callback(err,results);
   });
},

  deleteProductHelper: function(id, callback){
    var queryStr = `DELETE FROM products WHERE id = ${id};`
    db.query(queryStr, function(err, results){
      callback(err, results);
    });

}
};
