import { Guid } from "guid-typescript";
import { Gender, PersonBase } from "./PersonBase";

export class You implements PersonBase {
  id: Guid;
  forename: string;
  surname: string;
  birthMonth: number;
  birthYear: number;
  gender: Gender;
  health: number;

  constructor(
    forename: string,
    surname: string,
    gender: Gender,
    birthYear: number,
    birthMonth: number,
    health: number = 50
  ) {
    this.id = Guid.create();
    this.forename = forename;
    this.surname = surname;
    this.birthMonth = birthMonth;
    this.birthYear = birthYear;
    this.health = health;
    this.gender = gender;
  }
}
