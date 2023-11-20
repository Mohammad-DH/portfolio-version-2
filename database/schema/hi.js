import mongoose from "mongoose";

const HiSchema = new mongoose.Schema({
  fingerPrint: String,
});

const Hi = mongoose.models.Hi || mongoose.model("Hi", HiSchema);

export default Hi;
