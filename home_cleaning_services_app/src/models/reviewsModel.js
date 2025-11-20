import mongoose from "mongoose";
//Reviews Model for Bee/Customers
const ReviewsSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: [true, "Please enter your rating."],
    },
    review: {
      type: String,
      required: [true, "Please enter your review."],
    },
    nectarId: {
      type: mongoose.Types.ObjectId,
      ref: "Nectars",
    },
    beeId: {
      type: mongoose.Types.ObjectId,
      ref: "Bees",
    },
    plan: {
      type: String,
      required: [true, "Please enter a cleaning plan."],
    },
    beeName: {
      type: String,
      required: true,
    },
    beeLocation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const ReviewsModel =
  mongoose.models.reviews || mongoose.model("reviews", ReviewsSchema);
export default ReviewsModel;
