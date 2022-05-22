import { TextFragment } from "./TextFragment";

export interface CreateNoteRequest {
  body: TextFragment;
  labels: string[];
  watchers: string[];
}
