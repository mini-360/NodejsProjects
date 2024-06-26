import { User } from "../models/user.model.js";
async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}
export { handleGetAllUsers };
