import { Guid } from "guid-typescript";

export interface Relationship {
  id: Guid;
  target: Guid;
  relationshipStatus: RelationshipStatus;
  opinion: number;
}

export enum RelationshipStatus {
  spouse,
  child,
  friend,
  acquaintance,
  enemy,
}
