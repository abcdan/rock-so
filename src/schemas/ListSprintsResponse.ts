import { Sprint } from "./Sprint";

export interface ListSprintsResponse {
  sprints: Sprint;
  hasMore: boolean;
  nextCursor: string;
}
