import {BasicGoodbyeResponse } from "@/controller/types";
import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

// Router from express
let goodbyeRouter = express.Router();

// http://localhost:8000/api/hello?name=Martin/
goodbyeRouter.route('/')
    // GET:
    .get(async (req: Request, res: Response) => {
        // Obtain a Query Param
        let name: any = req?.query?.name;
        LogInfo(`Query Param: ${name}`);
        // Controller Instance to excute method
        const controller: HelloController = new HelloController();
        // Obtain Reponse
        const response: BasicGoodbyeResponse = await controller.getGoodbyeMessage(name);
        // Send to the client the response
        return res.send(response);
    })

// Export Hello Router
export default goodbyeRouter; 