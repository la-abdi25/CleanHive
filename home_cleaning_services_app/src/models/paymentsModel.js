import mongoose from "mongoose";
//Payments Model for all users
const PaymentSchema = new mongoose.Schema({
  sentByName: {
    type: String,
    required: true,
  },
  sentToName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  bookingId: {
    type: mongoose.Types.ObjectId,
    ref: "Bookings",
  },
  bookingRef: {
    type: String,
    required: true,
  },
  beePayment: {
    type: {},
    required: true,
  },
  nectarFundsAvailableOn: {
    type: String,
    required: true,
  },
  transferId: {
    type: String,
    required: true,
  },
  chargeId: {
    type: String,
    required: true,
  },
  isInRoute: {
    type: Boolean,
    default: true,
  },
  isCancelled: {
    type: Boolean,
    default: false,
  },
  transferReversalDate: {
    type: String,
    default: null,
  },
  refundDate: {
    type: String,
    default: null,
  },
});

const PaymentsModel =
  mongoose.models.payments || mongoose.model("payments", PaymentSchema);
export default PaymentsModel;
