import React, { useState, useEffect, useReducer } from "react";
import styles from "./donateCard.module.scss";
import "react-phone-number-input/style.css";
import PhoneInput, {
  Value,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import { ArrowSmLeftIcon } from "@heroicons/react/outline";
import { DonationProps } from "../../models/shared.model";
import {
  InitialStringInput,
  InitialNumberInput,
  InitialDonationTypeInput,
  InitialErrors,
  InitialPhoneNumberInput,
} from "../../models/initialValues.model";

import {
  Input,
  DonateSections,
  DonationErrors,
  DonationType,
  DonationErrorTypes,
  DonationErrorActions,
} from "../../models/donation.model";

import { toast } from "react-toastify";

import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

function DonateCard({ donationData }: { donationData: DonationProps }) {
  // Form Section State Variable
  const [activeSection, setActiveSection] =
    useState<DonateSections>("section1");

  // Form Validation State Variables
  const [validSection1, setValidSection1] = useState<boolean>(false);
  const [validSection2, setValidSection2] = useState<boolean>(false);

  // Form Inputs - State Variables
  const [donationType, setDonationType] = useState<Input<DonationType>>(
    InitialDonationTypeInput
  );
  const [campaign, setCampaign] = useState<Input<string>>(InitialStringInput);
  const [amount, setAmount] = useState<Input<number>>(InitialNumberInput);
  const [email, setEmail] = useState<Input<string>>(InitialStringInput);
  const [firstName, setFirstName] = useState<Input<string>>(InitialStringInput);
  const [lastName, setLastName] = useState<Input<string>>(InitialStringInput);
  const [phoneNumber, setPhoneNumber] = useState<Input<Value | undefined>>(
    InitialPhoneNumberInput
  );

  const [paymentMade, setPaymentMade] = useState<Boolean>(false);

  const DonationErrorsReducer = (
    state: DonationErrors,
    action: DonationErrorActions
  ) => {
    const { type } = action;
    switch (type) {
      case DonationErrorTypes.DONATION_TYPE_NOT_SELECTED:
        return { ...state, donationType: "Please select a donation type" };
      case DonationErrorTypes.DONATION_TYPE_OKAY:
        return { ...state, donationType: "" };
      case DonationErrorTypes.CAMPAIGN_NOT_SELECTED:
        return { ...state, campaign: "Please select a campaign" };
      case DonationErrorTypes.CAMPAIGN_OKAY:
        return { ...state, campaign: "" };
      case DonationErrorTypes.AMOUNT_NOT_VALID:
        return { ...state, amount: "Please input a valid amount" };
      case DonationErrorTypes.AMOUNT_OKAY:
        return { ...state, amount: "" };
      case DonationErrorTypes.FIRSTNAME_NOT_VALID:
        return { ...state, firstName: "Please input your firstname" };
      case DonationErrorTypes.FIRSTNAME_OKAY:
        return { ...state, firstName: "" };
      case DonationErrorTypes.LASTNAME_NOT_VALID:
        return { ...state, lastName: "Please input your lastname" };
      case DonationErrorTypes.LASTNAME_OKAY:
        return { ...state, lastName: "" };
      case DonationErrorTypes.EMAIL_NOT_VALID:
        return { ...state, email: "Please supply a valid email" };
      case DonationErrorTypes.EMAIL_OKAY:
        return { ...state, email: "" };
      case DonationErrorTypes.PHONENUMBER_NOT_VALID:
        return { ...state, phoneNumber: "Please supply a valid phone number" };
      case DonationErrorTypes.PHONENUMBER_OKAY:
        return { ...state, phoneNumber: "" };
      default:
        return { ...state };
    }
  };

  const [errors, dispatchError] = useReducer(
    DonationErrorsReducer,
    InitialErrors
  );

  const validateDonationType = () => {
    if (donationType.touched) {
      if (donationType.value) {
        dispatchError({ type: DonationErrorTypes.DONATION_TYPE_OKAY });
        return true;
      } else {
        dispatchError({ type: DonationErrorTypes.DONATION_TYPE_NOT_SELECTED });
        return false;
      }
    }
  };

  const validateCampaign = () => {
    if (donationType.value === "general") {
      dispatchError({ type: DonationErrorTypes.CAMPAIGN_OKAY });
      return true;
    }

    if (donationType.value === "campaign" && campaign.touched) {
      if (campaign.value) {
        dispatchError({ type: DonationErrorTypes.CAMPAIGN_OKAY });
        return true;
      } else {
        dispatchError({ type: DonationErrorTypes.CAMPAIGN_NOT_SELECTED });
        return false;
      }
    }
  };

  const validateAmount = () => {
    if (amount.touched) {
      if (amount.value > 0) {
        dispatchError({ type: DonationErrorTypes.AMOUNT_OKAY });
        return true;
      } else {
        dispatchError({ type: DonationErrorTypes.AMOUNT_NOT_VALID });
        return false;
      }
    }
  };

  const validateFirstName = () => {
    if (firstName.touched || firstName.value) {
      if (/[a-zA-Z][a-zA-Z ]{1,}/.test(firstName.value)) {
        dispatchError({ type: DonationErrorTypes.FIRSTNAME_OKAY });
        return true;
      } else {
        dispatchError({ type: DonationErrorTypes.FIRSTNAME_NOT_VALID });
        return false;
      }
    }
  };

  const validateLastName = () => {
    if (lastName.touched || lastName.value) {
      if (/[a-zA-Z][a-zA-Z ]{1,}/.test(lastName.value)) {
        dispatchError({ type: DonationErrorTypes.LASTNAME_OKAY });
        return true;
      } else {
        dispatchError({ type: DonationErrorTypes.LASTNAME_NOT_VALID });
        return false;
      }
    }
  };

  const validateEmail = () => {
    const EMAIL_REGEX =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.touched || email.value) {
      if (EMAIL_REGEX.test(email.value)) {
        dispatchError({ type: DonationErrorTypes.EMAIL_OKAY });
        return true;
      } else {
        dispatchError({ type: DonationErrorTypes.EMAIL_NOT_VALID });
        return false;
      }
    }
  };

  const validatePhoneNumber = () => {
    if (phoneNumber.touched || phoneNumber.value) {
      const phone: string = `${phoneNumber.value}`;
      if (isPossiblePhoneNumber(phone)) {
        dispatchError({ type: DonationErrorTypes.PHONENUMBER_OKAY });
        return true;
      } else {
        dispatchError({ type: DonationErrorTypes.PHONENUMBER_NOT_VALID });
        return false;
      }
    }
  };

  const validateSection1 = () => {
    const validDonationType = validateDonationType();
    const validCampaign = validateCampaign();
    const validAmount = validateAmount();

    if (validDonationType && validCampaign && validAmount) {
      setValidSection1(true);
    } else {
      setValidSection1(false);
    }
  };

  const validateSection2 = () => {
    const validFirstName = validateFirstName();
    const validLastName = validateLastName();
    const validEmail = validateEmail();
    const validPhoneNumber = validatePhoneNumber();

    if (validFirstName && validLastName && validEmail && validPhoneNumber) {
      setValidSection2(true);
    } else {
      setValidSection2(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      validateSection1();
    }, 500);
  }, [donationType, campaign, amount]);

  useEffect(() => {
    setTimeout(() => {
      validateSection2();
    }, 500);
  }, [firstName, lastName, email, phoneNumber]);

  const config = {
    public_key: "FLWPUBK-c0cfdc6ebc8a6098727674e87bc37db1-X",
    tx_ref: `date-${Date.now()}_purpose-${donationType.value}-donation${
      donationType.value === "campaign" ? `_campaign-${campaign.value}` : ""
    }`,
    amount: amount.value,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email.value,
      phonenumber: `${phoneNumber.value}`,
      name: `${firstName.value} ${lastName.value}`,
    },
    customizations: {
      title: "Davin Software Foundation",
      description: `A ${donationType.value} donation`,
      logo: "https://res.cloudinary.com/davinfoundation/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1650018974/Davin_Foundation_Icon_od7je8.jpg",
    },
  };

  const resetForm = () => {
    setDonationType(InitialDonationTypeInput);
    setCampaign(InitialStringInput);
    setAmount(InitialNumberInput);
    setEmail(InitialStringInput);
    setFirstName(InitialStringInput);
    setLastName(InitialStringInput);
    setPhoneNumber(InitialPhoneNumberInput);
    setActiveSection("section1");
    setPaymentMade(false);
  };

  const give = useFlutterwave(config);
  const recieveGift = () => {
    return new Promise((resolve, reject) => {
      give({
        callback: (response) => {
          if (response.status) {
            setPaymentMade(true);
            resolve("success");
            resetForm();
            resetForm();
          } else {
            reject("failure");
          }
          closePaymentModal();
        },
        onClose: () => {
          if (!paymentMade) {
            reject("failure");
          }
        },
      });
    });
  };

  useEffect(() => {
    console.log(config);
  }, [phoneNumber, validSection2]);

  return (
    <div className="row px-md-5 px-3">
      <div className={`col-12 my-2 ${styles.donationCard}`}>
        {activeSection === "section1" && (
          <div id="section1">
            <div className={`${styles.cardTitle}`}>
              Give to the Davin Software Foundation
            </div>
            <div className={styles.subsection}>
              <p>Giving towards a campaign or non-specific?</p>
              <div
                className={`flex flex-row justify-between ${styles.donationTypeWrappper} `}
              >
                <div
                  className={`${styles.donationType} ${
                    donationType.value === "campaign"
                      ? styles.selectedButton
                      : ""
                  }`}
                  onClick={() =>
                    setDonationType({ touched: true, value: "campaign" })
                  }
                >
                  Campaign
                </div>
                <div
                  className={`${styles.donationType} ${
                    donationType.value === "general"
                      ? styles.selectedButton
                      : ""
                  }`}
                  onClick={() =>
                    setDonationType({ touched: true, value: "general" })
                  }
                >
                  Non-Specific
                </div>
              </div>
              {donationType.touched && errors.donationType && (
                <div className={styles.error}>{errors.donationType}</div>
              )}
            </div>

            {donationType.value === "campaign" && (
              <div className={styles.subsection}>
                <p>Please select a campaign</p>
                <select
                  className={`form-select ${styles.select}`}
                  onChange={(e) =>
                    setCampaign({ touched: true, value: e.target.value })
                  }
                  value={campaign.value}
                >
                  <option value="">Please choose an option</option>
                  {donationData.campaigns.map((campaign) => (
                    <option value={campaign.id} key={campaign.id}>
                      {campaign.title}
                    </option>
                  ))}
                </select>
                {campaign.touched && errors.campaign && (
                  <div className={styles.error}>{errors.campaign}</div>
                )}
              </div>
            )}

            <div className={styles.subsection}>
              <p>How much would you like to give?</p>
              <div className={`mb-3 ${styles.amountButtonsWrapper}`}>
                {donationData.donationOptions.map((option) => (
                  <div
                    key={option}
                    className={`${styles.amountButton} ${
                      option === amount.value ? styles.selectedButton : ""
                    }`}
                    onClick={() => setAmount({ touched: true, value: option })}
                  >
                    N {option.toLocaleString()}
                  </div>
                ))}
              </div>
              <div className="position-relative">
                <div className={styles.pretext}>N</div>
                <input
                  type="number"
                  className={`form-control ${styles.input} ${styles.inputText}`}
                  placeholder="Other Amount"
                  onChange={(e) =>
                    setAmount({
                      ...amount,
                      value: parseInt(e.target.value),
                    })
                  }
                  onBlur={() => {
                    setAmount({ ...amount, touched: true });
                  }}
                />
              </div>
              {amount.touched && errors.amount && (
                <div className={styles.error}>{errors.amount}</div>
              )}
            </div>

            <div className={styles.subsection}>
              <button
                className={`btn btn-primary py-2 w-100 ${styles.actionButton}`}
                type="button"
                onClick={() => {
                  setActiveSection("section2");
                }}
                disabled={!validSection1}
              >
                Give Now
              </button>
            </div>
          </div>
        )}
        {activeSection === "section2" && (
          <div id="section2">
            <div className={`${styles.cardTitle}`}>
              <div
                className={styles.navigationBtn}
                onClick={() => {
                  setActiveSection("section1");
                }}
              >
                <ArrowSmLeftIcon />
              </div>
              Your Information
            </div>
            <div className={styles.subsection}>
              <div className={styles.combinedInput}>
                <div className={`mb-3 ${styles.inputContainer}`}>
                  <div className={styles.inputWrapper}>
                    <div
                      className={`${styles.inputLabel} ${styles.required} ${
                        firstName.value && styles.smallLabel
                      }`}
                    >
                      First Name
                    </div>
                    <input
                      type="text"
                      value={firstName.value}
                      className={`form-control ${styles.input}`}
                      onChange={(e) =>
                        setFirstName({ ...firstName, value: e.target.value })
                      }
                      onBlur={() => {
                        setFirstName({ ...firstName, touched: true });
                      }}
                    />
                  </div>
                  {firstName.touched && errors.firstName && (
                    <div className={styles.error}>{errors.firstName}</div>
                  )}
                </div>
                <div className={`mb-3 ${styles.inputContainer}`}>
                  <div className={styles.inputWrapper}>
                    <div
                      className={`${styles.inputLabel} ${styles.required} ${
                        lastName.value && styles.smallLabel
                      }`}
                    >
                      Last Name
                    </div>
                    <input
                      type="text"
                      value={lastName.value}
                      className={`form-control ${styles.input}`}
                      onChange={(e) =>
                        setLastName({ ...lastName, value: e.target.value })
                      }
                      onBlur={() => {
                        setLastName({ ...lastName, touched: true });
                      }}
                    />
                  </div>
                  {lastName.touched && errors.lastName && (
                    <div className={styles.error}>{errors.lastName}</div>
                  )}
                </div>
              </div>
              <div className={`mb-3 ${styles.inputContainer}`}>
                <div className={styles.inputWrapper}>
                  <div
                    className={`${styles.inputLabel} ${styles.required} ${
                      email.value && styles.smallLabel
                    }`}
                  >
                    Email
                  </div>
                  <input
                    type="text"
                    value={email.value}
                    className={`form-control ${styles.input}`}
                    onChange={(e) =>
                      setEmail({ ...email, value: e.target.value })
                    }
                    onBlur={() => {
                      setEmail({ ...email, touched: true });
                    }}
                  />
                </div>
                {email.touched && errors.email && (
                  <div className={styles.error}>{errors.email}</div>
                )}
              </div>
              <div className={`mb-3 ${styles.inputContainer}`}>
                <div className={styles.inputWrapper}>
                  <div
                    className={`${styles.inputLabel} ${styles.PhoneLabel} ${
                      styles.required
                    } ${phoneNumber.value && styles.smallLabel}`}
                  >
                    Phone Number
                  </div>
                  <PhoneInput
                    defaultCountry="NG"
                    value={phoneNumber.value}
                    className={`form-control ${styles.input}`}
                    onChange={(value) => {
                      setPhoneNumber({ ...phoneNumber, value: value });
                    }}
                    onBlur={() => {
                      setPhoneNumber({ ...phoneNumber, touched: true });
                    }}
                  />
                </div>
                {phoneNumber.touched && errors.phoneNumber && (
                  <div className={styles.error}>{errors.phoneNumber}</div>
                )}
              </div>
            </div>
            <div className={styles.subsection}>
              <button
                className={`btn btn-primary w-100 py-2 ${styles.actionButton}`}
                type="button"
                disabled={!validSection2}
                onClick={() => {
                  toast.promise(
                    recieveGift(),
                    {
                      pending: "We're processing your donation",
                      success: "Thank you for your generous donation! 👌",
                      error: "Looks like that failed. Please try again.",
                    },
                    {
                      toastId: `${firstName.value}-${lastName.value}_${amount.value}`,
                    }
                  );
                }}
              >
                Next Step
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DonateCard;
