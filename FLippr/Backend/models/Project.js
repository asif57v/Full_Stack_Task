import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String
});

export default mongoose.model("Project", projectSchema);
