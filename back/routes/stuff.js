const express = require("express");
var router = express.Router();

const stuffCtrl = require("../controllers/stuff.js");
router.post('/', stuffCtrl.createThing);
  
  router.get('/:id', stuffCtrl.find);
  
  router.put('/:id', stuffCtrl.updateThing);
  
  router.delete('/:id', stuffCtrl.delete);
  
  router.get("/" + "", stuffCtrl.getAllThing);

module.exports = router;