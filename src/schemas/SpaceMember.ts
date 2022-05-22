export interface SpaceMember {
  userId: string;
  id: number;
  role: string;
  state: string;
  invitedAt: number;
  joinedAt: number;
  removedAt: number;
  suspendedAt: number;
  invitedBy: string;
  name: string;
  avatarBig: string;
  avatarSmall: string;
  tzOffset: string;
  orgId: string;
  email: string;
  emailAliases: string[];
  phone: string;
}
