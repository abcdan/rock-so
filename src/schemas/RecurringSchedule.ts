import { RecurringScheduleType } from "../enums/RecurringScheduleType";
import { RecurringScheduleDaysOfWeek } from "./RecurringScheduleDaysOfWeek";

export interface RecurringSchedule {
  targetListId: number;
  type: RecurringScheduleType;
  workdaysOnly: boolean;
  dayOfMonth: number;
  daysOfWeek: RecurringScheduleDaysOfWeek;
}
