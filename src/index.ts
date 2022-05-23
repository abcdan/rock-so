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
  private verbose: boolean;

  constructor(token: string, verbose = false) {
    this.token = token;
    this.verbose = verbose;
  }

  /**
   * This function sends a message to a user, and returns a response object that is either a
   * SendMessageResponse or a SendMessageErrorResponse.
   * @param {SendMessageRequest} message - SendMessageRequest
   * @returns SendMessageResponse | SendMessageErrorResponse
   */
  public async sendMessage(message: SendMessageRequest) {
    return (await this._request("sendMessage", message, "POST")) as
      | SendMessageResponse
      | SendMessageErrorResponse;
  }

  /**
   * This function takes a CreateNoteRequest object, sends it to the server, and returns a
   * CreateNoteResponse object or a CreateNoteErrorResponse object.
   * @param {CreateNoteRequest} note - CreateNoteRequest
   * @returns CreateNoteResponse or CreateNoteErrorResponse
   */
  public async createNote(note: CreateNoteRequest) {
    return (await this._request("createNote", note, "POST")) as
      | CreateNoteResponse
      | CreateNoteErrorResponse;
  }

  /**
   * "This function takes a CreateNoteRequest object, sends it to the server, and returns a
   * CreateTaskRequest object or a CreateTaskErrorResponse object."
   * </code>
   * @param {CreateNoteRequest} task - CreateNoteRequest
   * @returns CreateTaskRequest | CreateTaskErrorResponse
   */
  public async createTask(task: CreateNoteRequest) {
    return (await this._request("createTask", task, "POST")) as
      | CreateTaskRequest
      | CreateTaskErrorResponse;
  }

  /**
   * This function returns a list of all the members of the space.
   * @returns The return type is ListSpaceMembersResponse.
   */
  public async listSpaceMembers() {
    return (await this._request(
      "listSpaceMembers",
      {},
      "GET"
    )) as ListSpaceMembersResponse;
  }

  /**
   * This function returns a list of sprints.
   * @returns The return type is ListSprintsResponse.
   */
  public async listSprints() {
    return (await this._request(
      "listSprints",
      {},
      "GET"
    )) as ListSprintsResponse;
  }

  /**
   * This function returns a list of labels.
   * @returns The response from the API call.
   */
  public async listLabels() {
    return (await this._request("listLabels", {}, "GET")) as ListLabelsResponse;
  }

  /**
   * This function returns a list of TaskLists, which are objects that contain a list of Tasks.
   * @returns An array of TaskList objects.
   */
  public async getTaskLists() {
    return (await this._request("getTaskLists", {}, "GET")) as TaskList[];
  }

  /**
   * This function returns an array of CustomField objects, which are defined in the CustomField.ts
   * file.
   * @returns An array of CustomFields
   */
  public async getCustomFields() {
    return (await this._request("getCustomFields", {}, "GET")) as CustomField[];
  }

  /**
   * It takes in a method, body, and type, and returns a response from the API.
   * @param {string} method - The method you want to call.
   * @param {any} body - any = {}
   * @param [type=GET] - GET or POST
   * @returns The response from the API.
   */
  async _request(method: string, body: any = {}, type = "GET") {
    const url = `https://api.rock.so/webhook/bot?method=${method}&auth=${this.token}`;

    if (type === "GET") {
      try {
        const res = await axios.get(url, body);

        if (this.verbose) {
          console.log(res.data);
        }

        return res as any;
      } catch (error) {
        console.log(error);

        if (this.verbose) {
          console.error(error);
        }
        throw error;
      }
    }
    if (type === "POST") {
      try {
        const res = await axios.post(url, body);

        if (this.verbose) {
          console.log(res.data);
        }

        return res as any;
      } catch (error) {
        if (this.verbose) {
          console.error(error);
        }
        throw error;
      }
    }

    return null;
  }
}

export = Rock;
