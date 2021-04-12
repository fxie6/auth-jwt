const router = require("express").Router();
const User = require("../model/User");
const verify = require("./verifyToken");

router.get("/", verify, async (req, res) => {
  //   res.json({
  //     posts: {
  //       title: "this is a testing post",
  //       description: "random data you should not access",
  //     },
  //   });
  //   res.send(req.user);
  const user = await User.findOne({ _id: req.user });
  if (!user) {
    return res.status(400).send("User does not exist");
  } else {
    return res.send("User found");
  }
});

module.exports = router;
