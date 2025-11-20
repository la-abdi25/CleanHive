import mongoose from "mongoose";
// Model for Bees/Customers
export const BeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name."],
    lowercase: true,
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name."],
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Please enter a valid email."],
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter your phone number."],
  },
  address: {
    type: String,
    required: [true, "Please enter your home address."],
    maxlength: [50, "Max length of 50 characters."],
  },
  password: {
    type: String,
    required: [true, "Please enter your password."],
    minlength: [6, "Please enter a minimum character length of 6."],
  },
  accountId: {
    type: String,
    required: true,
  },
});

const BeeModel = mongoose.models.bees || mongoose.model("bees", BeeSchema);
export default BeeModel;
