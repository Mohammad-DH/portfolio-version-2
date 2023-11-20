import mongoose from "mongoose";

const ReactionSchema = new mongoose.Schema({
  score: Number,
  fingerPrint: String,
});

const Reaction =
  mongoose.models.Reaction || mongoose.model("Reaction", ReactionSchema);

export default Reaction;
