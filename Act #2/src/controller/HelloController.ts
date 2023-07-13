import { BasicGoodbyeResponse, BasicResponse } from "./types";
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
    /**
    * JSON response with message 'Hello World'
    */
    public async getGoodbyeMessage(name?: string): Promise<BasicGoodbyeResponse> {
        LogSuccess('[/api/goodbye] Get Request');
        const date = new Date();
        return {
            message: `Goodbye , ${name || "World!"}`,
            Date: date
        }

    }


    
}