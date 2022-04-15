export type DonateSections = "section1" | "section2";

export type DonationType = "general" | "campaign" | "";

export type DonationErrors = {
  donationType: string;
  campaign: string;
  amount: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type Input<T> = {
  value: T;
  touched: boolean;
};

export enum DonationErrorTypes {
  DONATION_TYPE_NOT_SELECTED = "DONATION_TYPE_NOT_SELECTED",
  DONATION_TYPE_OKAY = "DONATION_TYPE_OKAY",
  CAMPAIGN_NOT_SELECTED = "CAMPAIGN_NOT_SELECTED",
  CAMPAIGN_OKAY = "CAMPAIGN_OKAY",
  AMOUNT_NOT_VALID = "AMOUNT_NOT_VALID",
  AMOUNT_OKAY = "AMOUNT_OKAY",
  FIRSTNAME_NOT_VALID = "FIRSTNAME_NOT_VALID",
  FIRSTNAME_OKAY = "FIRSTNAME_OKAY",
  LASTNAME_NOT_VALID = "LASTNAME_NOT_VALID",
  LASTNAME_OKAY = "LASTNAME_OKAY",
  EMAIL_NOT_VALID = "EMAIL_NOT_VALID",
  EMAIL_OKAY = "EMAIL_OKAY",
  PHONENUMBER_NOT_VALID = "PHONENUMBER_NOT_VALID",
  PHONENUMBER_OKAY = "PHONENUMBER_OKAY",
}

export interface DonationErrorActions {
  type: DonationErrorTypes;
  payload?: string;
}
