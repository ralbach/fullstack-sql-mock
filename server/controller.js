// Controller here
// complete building out the controller
const dbHelpers = require('../db/dbhelpers.js');

const controller = {
    get: (req, res) => {
      dbHelpers.getProductsHelper((err, data) => {
        if (err) console.error(err);
        res.status(200).send(data);
      });
    },
    post: (req, res) => {
      let message  = req.body
      dbHelpers.postProductsHelper(message, (err, data) =>{
        if(err) console.error(err);
        res.status(201).send('successful post');
      })
    },
    put: (req, res) => {
      console.log(req.params);
      console.log(req.body);

      var obj ={
        id: req.params._id,
        item:     req.body.item,
        min_cost: req.body.min_cost,
        curr_bid: req.body.curr_bid,
        ends_in:  req.body.ends_in,
        image:    req.body.image
      }
      dbHelpers.updateProductHelper(obj, (err, data) => {
        if(err) console.error(err);
        res.status(201).send(('successful update'));
      })
    },
    delete: (req, res) => {
      let toDelete = req.params._id;
      dbHelpers.deleteProductHelper(toDelete, (err, data) =>{
        if(err) console.error(err);
        res.status(203).send(('successful delete'));
      });
    }
}


module.exports = controller;