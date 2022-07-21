import { Dispatch, SetStateAction } from "react";

export interface IError {
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
}