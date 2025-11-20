import mongoose from "mongoose";
import { Double } from "mongodb";
//Nectar Model for Nectars/Cleaning Agents
export const NectarSchema = new mongoose.Schema({
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
    required: [true, "Please enter your email."],
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter your phone number."],
  },
  address: {
    type: String,
    required: [true, "Please enter your address."],
    maxlength: [50, "Max length of 50 characters."],
  },
  bio: {
    type: String,
    required: [true, "Please enter your bio."],
    maxlength: [150, "Max length of 150 characters."],
  },
  plan: {
    type: String,
    required: [true, "Please enter your cleaning plan."],
    lowercase: true,
  },
  profileImage: {
    type: String,
    required: [true, "Please enter your profile image."],
  },
  availability: {
    type: [],
    required: [true, "Please enter your availability times."],
  },
  city_location: {
    type: String,
    required: [true, "Please enter your city."],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password."],
    minlength: [6, "Please enter a minimum character length of 6."],
  },
  rating: {
    type: Double,
    default: 5.0,
  },
  accountId: {
    type: String,
    required: true,
  },
});

const NectarModel =
  mongoose.models.nectars || mongoose.model("nectars", NectarSchema);

export default NectarModel;
