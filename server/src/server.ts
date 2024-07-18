import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from './routes/shortUrl'

dotenv.config();
connectDb();

const port = process.env.PORT || 5001;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: "https://link-generator-irdd.onrender.com",
    credentials: true,
})
);

app.use("/api/", shortUrl);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

