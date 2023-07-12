import express,  { Express , Request, Response } from 'express';
import dotenv from 'dotenv';

// * Configuration the .env file
dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json({
        "data": {
            "message": "Goodbye, world"
            }
    });

})
app.get('/hello', (req: Request, res: Response) => {
    res.json({
        "data": {
            "message": "anonimo"
            }
    });

})
app.get('/hello/:name', (req: Request, res: Response) => {
    res.json({
        "data": {
            "message": req.params.name, 
            }
    });

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
