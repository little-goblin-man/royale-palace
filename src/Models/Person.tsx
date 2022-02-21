import { OldyTimeyDate } from "./OldyTimeyDate";

export interface Person {
  forename: string;
  surname: string;
  birthMonth: number;
  birthYear: number;
  gender: "male" | "female";
  happiness: number;
}

export interface You {
  forename: string;
  surname: string;
  birthMonth: number;
  birthYear: number;
}

export function calculateAge(
  currentDate: OldyTimeyDate,
  birthMonth: number,
  birthYear: number
) {
  return (
    currentDate.year - birthYear + (currentDate.month >= birthMonth ? 1 : 0)
  );
}
