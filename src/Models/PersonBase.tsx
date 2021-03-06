import { Guid } from "guid-typescript";
import { OldyTimeyDate } from "./OldyTimeyDate";

export interface PersonBase {
  id: Guid;
  forename: string;
  surname: string;
  birthMonth: number;
  birthYear: number;
  gender: Gender;
  health: number;
}

export function calculateAge(
  currentDate: OldyTimeyDate,
  birthMonth: number,
  birthYear: number
) {
  console.log(currentDate.year);
  console.log(birthYear);
  return (
    currentDate.year - birthYear + (currentDate.month >= birthMonth ? 1 : 0)
  );
}

export enum Gender {
  male,
  female,
}
