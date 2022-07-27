export interface IError {
  code: string;
  message: string;
  name: string;
  response: {
    data: {
      cod: string;
      message: string;
    };
    status: number;
    statusText: string;
  };
}
