import { OldyTimeyDate } from "./OldyTimeyDate";

export interface Person {
  forename: string | undefined;
  surname: string | undefined;
  birthMonth: number | undefined;
  birthYear: number | undefined;
  gender: "male" | "female";
  happiness: number;
}

export interface You {
  forename: string | undefined;
  surname: string | undefined;
  birthMonth: number | undefined;
  birthYear: number | undefined;
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
