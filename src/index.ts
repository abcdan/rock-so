import { SendMessageRequest } from "./schemas/request/SendMessageRequest";
import { SendMessageResponse } from "./schemas/response/SendMessageResponse";
import { SendMessageErrorResponse } from "./schemas/response/SendMessageErrorResponse";
import { CreateNoteRequest } from "./schemas/request/CreateNoteRequest";
import { CreateNoteErrorResponse } from "./schemas/response/CreateNoteErrorResponse";
import { CreateNoteResponse } from "./schemas/response/CreateNoteResponse";
import { CreateTaskRequest } from "./schemas/request/CreateTaskRequest";
import { CreateTaskErrorResponse } from "./schemas/response/CreateTaskErrorResponse";
import { ListSpaceMembersResponse } from "./schemas/response/ListSpaceMembersResponse";
import { ListSprintsResponse } from "./schemas/response/ListSprintsResponse";
import { ListLabelsResponse } from "./schemas/response/ListLabelsResponse";
import { TaskList } from "./schemas/TaskList";
import { CustomField } from "./schemas/CustomField";
import axios from "axios";

class Rock {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  public async sendMessage(message: SendMessageRequest) {
    return (await this._request("sendMessage", message, "POST")) as
      | SendMessageResponse
      | SendMessageErrorResponse;
  }

  public async createNote(note: CreateNoteRequest) {
    return (await this._request("createNote", note, "POST")) as
      | CreateNoteResponse
      | CreateNoteErrorResponse;
  }

  public async createTask(task: CreateNoteRequest) {
    return (await this._request("createTask", task, "POST")) as
      | CreateTaskRequest
      | CreateTaskErrorResponse;
  }

  public async listSpaceMembers() {
    return (await this._request(
      "listSpaceMembers",
      {},
      "GET"
    )) as ListSpaceMembersResponse;
  }

  public async listSprints() {
    return (await this._request(
      "listSprints",
      {},
      "GET"
    )) as ListSprintsResponse;
  }
  
  public async listLabels() {
    return (await this._request(
      "listLabels",
      {},
      "GET"
    )) as ListLabelsResponse;
  }

  public async getTaskLists() {
    return (await this._request(
      "getTaskLists",
      {},
      "GET"
    )) as TaskList[];
  }
  public async getCustomFields() {
    return (await this._request(
      "getCustomFields",
      {},
      "GET"
    )) as CustomField[];
  }

  async _request(method: string, body: any = {}, type = "GET") {
    const url = `https://api.rock.so/webhook/bot?method=${method}&auth=${this.token}` 
  
    if(type === "GET") {
      const res = axios.get(url, body);
      return await res as any;
    }
    if(type === "POST") {
      const res = axios.get(url, body);
      return await res as any;

    }


  }
}


export = Rock