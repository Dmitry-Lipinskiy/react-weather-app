import { createContext, Dispatch, SetStateAction } from "react";
import { IError } from "./IError";

// // type Error = IError & IErrorModal;

// interface IErrorModal {
//   setOpenErrorModal: Dispatch<SetStateAction<boolean>>
// }

const Context = createContext({} as IError);

export default Context;