const router = require("express").Router();
const AuthController = require("../controllers/user.controler");
const auth = require("../middlewares/auth.middleware");

router.get("/", AuthController.getAll);
router.get("/:userId", AuthController.getOne);
router.put("/:userId", AuthController.update);
router.delete("/:userId", AuthController.delete);

module.exports = router;
