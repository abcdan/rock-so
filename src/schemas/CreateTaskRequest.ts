import { CustomField } from "./CustomField";
import { RecurringSchedule } from "./RecurringSchedule";
import { TextFragment } from "./TextFragment";


export interface CreateTaskRequest {
  title: string;
  body: TextFragment;
  listId: number;
  start: number;
  due: number;
  owners: string[];
  priority: number;
  severity: number;
  sprint: number;
  checkList: string[];
  recurringSchedule: RecurringSchedule;
  customField: CustomField
  labels: string[];
  watchers: string[];
}
