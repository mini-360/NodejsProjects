import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

export default router;
