const router = require('express')
const router =express.Router();
const upload = require("../middlewares/upload")

router.post('/',upload.fields([{name:'audio',maxCount:1},
{name:'image',maxCount:1}]),Create);

module.exports =router;