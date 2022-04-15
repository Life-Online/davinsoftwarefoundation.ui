import { Input, DonationType, DonationErrors } from "./donation.model";
import PhoneInput, { Value } from "react-phone-number-input";

export const InitialDonationTypeInput: Input<DonationType> = {
  value: "",
  touched: false,
};

export const InitialStringInput: Input<string> = {
  value: "",
  touched: false,
};

export const InitialNumberInput: Input<number> = {
  value: 0,
  touched: false,
};

export const InitialErrors: DonationErrors = {
  donationType: "",
  campaign: "",
  amount: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

export const InitialPhoneNumberInput: Input<Value> = {
  value: "",
  touched: false,
};
