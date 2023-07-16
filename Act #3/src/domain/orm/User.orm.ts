import { userEntity } from "../entities/User.entity";
import dotenv from 'dotenv';
import { LogSuccess, LogError } from "../../utils/logger";
import mongoose from "mongoose";

dotenv.config();

// CRUD

/**
 * Method to obtain all Users from Collection "Users" in Mongo Server
 */
export const getAllUsers = async (page: number, limit: number): Promise<any[] | undefined> => {
    try {
        let userModel = userEntity();

        let response: any = {};

        // Search all users (using pagination)
        await userModel.find({isDeleted: false})
            .select('name email age katas')
            .limit(limit)
            .skip((page - 1) * limit)
            .exec().then((users: any[]) => {
                response.users = users;
            });
        
        // Count total documents in collection "Users"
        await userModel.countDocuments().then((total: number) => {
            response.totalPages = Math.ceil(total / limit);
            response.currentPage = page;
        });

        return response;

    } catch (error) {
        LogError(`[ORM ERROR]: Getting All Users: ${error}`);
    }
}