import { createContext } from "react";
import { IError } from "./IError";

const Context = createContext({} as IError);

export default Context;