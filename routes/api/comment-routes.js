const router = require("express").Router();
const { Comment } = require("../../models");
const commentRoutes = require("./comment-routes");

router.use("/comments", commentRoutes);

router.get("/", (req, res) => {});

router.post("/", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
