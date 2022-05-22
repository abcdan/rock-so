import { CustomFieldType } from "../enums/CustomFieldType";
import { CustomFieldOption } from "./option/CustomFieldOption";

export interface CustomField {
  id: number;
  title: string;
  required: boolean;
  type: CustomFieldType;
  options: CustomFieldOption;
}
