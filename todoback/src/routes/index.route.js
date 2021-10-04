const auth = require("./auth.route");
const todo = require("./todo.route");


let express = require('express');
let router = express.Router();

router.use('/auth', auth);
router.use('/todos', todo);



module.exports = router;

