import { IKata } from "../../domain/interfaces/IKata.interface";
import { IUser } from "../../domain/interfaces/IUser.interface";
import { BasicResponse } from "../types";

export interface IUserController {
    // Read all users from database || get User By ID
    getUsers(/*page: number, limit: number, */id?: string): Promise<any>
    // Get Katas of User
    //getKatas(page: number, limit: number, id?: string): Promise<any>
    // Delete User By ID
    deleteUser(id?:string): Promise<any>
    // Update user
    updateUser(id:string, user: any): Promise<any>
}