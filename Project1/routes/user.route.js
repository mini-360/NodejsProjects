import express from "express";
import {handleGetAllUsers} from "../controllers/user.controller.js"
const router = express.Router();

router.get("/", async (req, res) => {
 
});
router
  .route("/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "user not found" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    // Edit with user id
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    return res.status(201).json({ status: "success" });
  })
  .delete(async (req, res) => {
    // Delete with user id
    await User.findByIdAndDelete(req.params.id);
    return res.status(201).json({ status: "success" });
  });

router.post("/", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ message: "All fields are required...." });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log(result);
  return res.status(201).json({ message: "success" });
});

export default router;
