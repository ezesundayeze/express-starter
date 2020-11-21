const router = require("express").Router();
const UserCtrl = require("../controllers/user.controler");
const auth = require("../middlewares/auth.middleware");
// const { role } = require("../config");

router.post("/", UserCtrl.create);
router.get("/", UserCtrl.getAll);
router.get("/:userId", UserCtrl.getOne);
router.put("/:userId", UserCtrl.update);
router.delete("/:userId", UserCtrl.delete);

module.exports = router;
