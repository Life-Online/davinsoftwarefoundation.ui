import { CallToActionProps } from "../models/shared.model";

const CallToActionData: CallToActionProps = {
  message: "Together we can make a difference",
  imageURL: "/img/cta-cover.png",
  links: [
    {
      text: "Make a Donation",
      style: "secondary",
      link: "/donate",
    },
    {
      text: "Volunteer for a Campaign",
      style: "primary",
      link: "/volunteer",
    },
  ],
};

export default CallToActionData;
