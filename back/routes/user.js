const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const app = express();
const bodyParser = require("body-parser");

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

router.post("/signup", urlencodedParser, jsonParser, userCtrl.signup);
router.post("/login", urlencodedParser, jsonParser, userCtrl.login);


module.exports = router;