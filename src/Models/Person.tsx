import { OldyTimeyDate } from "./OldyTimeyDate";

export interface PersonBase {
  forename: string | undefined;
  surname: string | undefined;
  birthMonth: number | undefined;
  birthYear: number | undefined;
}

export interface Person {
  forename: string | undefined;
  surname: string | undefined;
  birthMonth: number | undefined;
  birthYear: number | undefined;
  happiness: number;
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
