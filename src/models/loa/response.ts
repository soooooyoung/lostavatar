export interface ErrorResponse {
  Message: string;
}

export interface SuccessResponse {}

export type LoaResponse = ErrorResponse | SuccessResponse | SuccessResponse[];
