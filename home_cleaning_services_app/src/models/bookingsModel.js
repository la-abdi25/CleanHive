import mongoose from "mongoose";
//Bookings Model for Bee users
const BookingsModelSchema = new mongoose.Schema({
  nectarName: {
    type: String,
    required: true,
  },
  nectarId: {
    type: mongoose.Types.ObjectId,
    ref: "Nectars",
  },
  beeName: {
    type: String,
    required: true,
  },
  beeLocation: {
    type: String,
    required: true,
  },
  beeId: {
    type: mongoose.Types.ObjectId,
    ref: "Bees",
  },
  beeStripeId: {
    type: String,
    required: true,
  },
  nectarStripeId: {
    type: String,
    required: true,
  },
  paymentIntentId: {
    type: String,
    required: true,
  },
  beeNotes: {
    type: String,
    required: [true, "Please enter your bee notes."],
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  timeSlot: {
    type: String,
    required: [true, "Please enter a time slot."],
  },
  pending: {
    type: Boolean,
    default: true,
  },
  upcoming: {
    type: Boolean,
    default: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  cancelled: {
    type: Boolean,
    default: false,
  },
  bookingRef: {
    type: String,
    required: true,
  },
});

const BookingsModel =
  mongoose.models.bookings || mongoose.model("bookings", BookingsModelSchema);
export default BookingsModel;
