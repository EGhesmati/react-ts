export type Status = "loading" | "success" | "error";

export interface ApiResponse {
  status: Status;
  data?: string;
  error?: string;
}
