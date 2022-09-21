import {environment} from '../environments/environment';

export const API_BASE = environment.path;
export const API_AUTH = `${API_BASE}/efazenda`;

export const API_FILES = `${API_BASE}/files`;

export class ResponseModel {
  data: any[];
  status: StatusResponse;
}

export class StatusResponse {
  code: number;
  message: string;
}

export class Error {

  constructor() {
  }

  static error(error: Response | any) {
    return error;
  }
}

























