import { CustomFieldType } from "../enums/CustomFieldType";
import { CustomFieldOption } from "./CustomFieldOption";

export interface CustomField {
  id: number;
  title: string;
  required: boolean;
  type: CustomFieldType;
  options: CustomFieldOption;
}
