import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: String,
  designation: String,
  description: String,
  image: String
});

export default mongoose.model("Client", clientSchema);
