const express = require("express");
const { getallusers, getallcontacts, deleteuserbyid, deletecontactbyid } = require("../controller/admin-controller");
const authmiddleware=require("../middlewares/auth-middleware")
const adminmiddleware=require("../middlewares/admin-middleware")
const admin_router = express.Router();

admin_router.route('/users').get(authmiddleware,adminmiddleware,getallusers);
admin_router.route('/contacts').get(getallcontacts);
admin_router.route("/users/delete/:id").delete(authmiddleware,adminmiddleware,deleteuserbyid)
admin_router.route("/contacts/delete/:id").delete(authmiddleware,adminmiddleware, deletecontactbyid)

module.exports = admin_router;
