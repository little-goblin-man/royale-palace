import { Guid } from "guid-typescript";
import { getRandomInt } from "../Components/Utilities/RandomNumbers";
import { Gender, PersonBase, Relationship } from "./PersonBase";

export class Person implements PersonBase {
  id: Guid;
  forename: string;
  surname: string;
  birthMonth: number;
  birthYear: number;
  gender: Gender;
  happiness: number;
  relationships: Relationship[];

  constructor(
    forename: string,
    surname: string,
    gender: Gender,
    birthYear: number,
    birthMonth?: number,
    happiness?: number
  ) {
    this.id = Guid.create();
    this.forename = forename;
    this.surname = surname;
    this.birthMonth = birthMonth ?? getRandomInt(12);
    this.birthYear = birthYear;
    this.gender = gender;
    this.happiness = happiness ?? 0;
    this.relationships = [];
  }
}
