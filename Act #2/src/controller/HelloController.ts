import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces/IHelloController";
import { LogSuccess } from "../utils/logger";


export class HelloController implements IHelloController {
    
   /**
    * JSON response with message 'Hello World'
    */
    public async getMessage(name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get Request');

        return {
            message: `Hello, ${name || "World!"}`
        }

    }

    
}