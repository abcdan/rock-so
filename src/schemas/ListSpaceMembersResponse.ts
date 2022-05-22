import { SpaceMember } from "./SpaceMember";

export interface ListSpaceMembersResponse {
  members: SpaceMember[];
  hasMore: boolean;
  nextCursor: string;
}
