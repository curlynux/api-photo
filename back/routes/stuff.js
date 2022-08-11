const express = require("express");
const auth = require("../midllewares/auth.js")
var router = express.Router();

const stuffCtrl = require("../controllers/stuff.js");

router.get("/" + "", auth, stuffCtrl.getAllThing);
router.post('/', auth, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.find);
router.put('/:id', auth, stuffCtrl.updateThing);
router.delete('/:id', auth, stuffCtrl.delete);
  

module.exports = router;