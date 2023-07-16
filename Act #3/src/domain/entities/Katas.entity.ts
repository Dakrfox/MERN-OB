import mongoose from "mongoose";



export const katasEntity = () => {
/**
 * Name

Description

Level (nivel de dificultad numérico)

User (id asociado al usuario que lo ha creado)

Date (Fecha de creación del reto)

Valoration (sobre 5, valor numérico)

Chances (número de intentos realizados por otros usuarios)


 */
    let date = new Date();
    let katasSchema = new mongoose.Schema<any>(
        {
            name: { type: String, required: true },
            description: { type: String, required: true },
            level: { type: Number, required: true },
            User: { type: String, required: true },
            date: { type: date, required: true },
            valoration: { type: Number, required: true },
            chances: { type: Number, required: true },
           
        }
    );

    return mongoose.models.Katas || mongoose.model<any>('Katas', katasSchema);

}