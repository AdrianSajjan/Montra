export interface OnboardCarousel {
  id: string;
  image: any;
  text: string;
  title: string;
}

export const carousel: Array<OnboardCarousel> = [
  {
    id: "1",
    title: "Gain total control\nof your money",
    image: require("@images/gain-control.png"),
    text: "Become your own money manager\nand make every cent count",
  },
  {
    id: "2",
    title: "Know where your\nmoney goes",
    image: require("@images/money-expenditure.png"),
    text: "Track your transaction easily,\nwith categories and financial report ",
  },
  {
    id: "3",
    title: "Planning ahead for\nthe future",
    image: require("@images/planning-ahead.png"),
    text: "Setup your budget for each category\nso you are in control",
  },
];
