const router = require("express").Router();
const { saveContact, getContacts } = require("../controllers/contactController");

router.post("/contact",  saveContact);
router.get("/contacts",  getContacts);

module.exports = router;
