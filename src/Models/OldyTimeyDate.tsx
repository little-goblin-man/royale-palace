export interface OldyTimeyDate {
  year: number;
  month: number;
}

export const OldyTimeyDateToString = (date: OldyTimeyDate) => {
  return `${getMonth(date.month)} ${date.year}`;
};

export const getMonth = (monthInt: number) => {
  return Months[monthInt - 1];
};

export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
