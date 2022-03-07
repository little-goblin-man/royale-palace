import { Guid } from "guid-typescript";
import { Gender, PersonBase, Relationship } from "./PersonBase";

export class You implements PersonBase {
  id: Guid;
  forename: string;
  surname: string;
  birthMonth: number;
  birthYear: number;
  gender: Gender;
  relationships: Relationship[];

  constructor(
    forename: string,
    surname: string,
    gender: Gender,
    birthYear: number,
    birthMonth: number
  ) {
    this.id = Guid.create();
    this.forename = forename;
    this.surname = surname;
    this.birthMonth = birthMonth;
    this.birthYear = birthYear;
    this.gender = gender;
    this.relationships = [];
  }
}
