import mongoose from "mongoose";



export const userEntity = () => {

    let userSchema = new mongoose.Schema<any>(
        {
            name: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
            age: { type: Number, required: true },
           
        }
    );

    return mongoose.models.Users || mongoose.model<any>('Users', userSchema);

}