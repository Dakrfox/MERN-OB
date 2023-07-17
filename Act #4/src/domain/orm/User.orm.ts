import { userEntity } from "../entities/User.entity";

import { LogSuccess, LogError } from "../../utils/logger";
import { IUser } from "../interfaces/IUser.interface";


// Environment variables
import dotenv from 'dotenv';


import { IKata } from "../interfaces/IKata.interface";
import mongoose from "mongoose";

// Configuration of environment variables
dotenv.config();

// Obtain Secret key to generate JWT
const secret = process.env.SECRETKEY || 'MYSECRETKEY';

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
            .exec().then((users: IUser[]) => {
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

// - Get User By ID
export const getUserByID = async (id: string) : Promise<any | undefined> => {

    try {
        let userModel = userEntity();

        // Search User By ID
        return await userModel.findById(id).select('name email age katas');

    } catch (error) {
        LogError(`[ORM ERROR]: Getting User By ID: ${error}`);
    }

}

// - Delete User By ID
export const deleteUserByID = async (id: string): Promise<any | undefined> => {

    try {
        let userModel = userEntity();

        // Delete User BY ID
        return await userModel.deleteOne({ _id: id })

    } catch (error) {
        LogError(`[ORM ERROR]: Deleting User By ID: ${error}`);
    }

}

// - Update User By ID
export const updateUserByID = async (id: string, user: any): Promise<any | undefined> => {

    try {
        
        let userModel = userEntity();

        // Update User
        return await userModel.findByIdAndUpdate(id, user);

    } catch (error) {
        LogError(`[ORM ERROR]: Updating User ${id}: ${error}`);
    }

}

// Register User
export const registerUser = async (user: IUser): Promise<any | undefined> => {
    try {
        
        let userModel = userEntity();

        // Create / Insert new User
        return await userModel.create(user);

    } catch (error) {
        LogError(`[ORM ERROR]: Creating User: ${error}`);
    }

}

